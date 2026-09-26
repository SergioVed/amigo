// Copies the local DB_* database into an EMPTY Neon database. Never drops data.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { Client } = require('pg');
const { rootCertificates } = require('node:tls');
const caFile = path.resolve(__dirname, '../.temp/postgres-root-certificates.pem');
const env = require('dotenv').parse(fs.readFileSync(path.resolve(__dirname, '../.env.development.local')));
const quote = value => '"' + value.replaceAll('"', '""') + '"';
const source = { host: env.DB_HOST, port: Number(env.DB_PORT || 5432), user: env.DB_USER, password: env.DB_PASSWORD, database: env.DB_NAME };
const url = new URL(env.NEON_DATABASE_URL);
if (!url.hostname.endsWith('.neon.tech')) throw new Error('Expected a Neon destination.');
const destination = { host: url.hostname, port: Number(url.port || 5432), user: decodeURIComponent(url.username), password: decodeURIComponent(url.password), database: decodeURIComponent(url.pathname.slice(1)), ssl: { rejectUnauthorized: true } };
const bin = process.env.PG_BIN || '/Applications/pgAdmin 4.app/Contents/SharedSupport';
function run(tool, args, config) {
    const result = spawnSync(path.join(bin, tool), args, {
        env: { ...process.env, PGHOST: config.host, PGPORT: String(config.port), PGUSER: config.user, PGPASSWORD: config.password, PGDATABASE: config.database, PGSSLMODE: config.ssl ? 'verify-full' : 'prefer', ...(config.ssl ? { PGSSLROOTCERT: caFile } : {}) },
        encoding: 'utf8',
    });
    if (result.status !== 0) throw new Error(`${tool} failed: ${result.error?.message || result.stderr}`);
}
async function tables(client) {
    return (await client.query("SELECT tablename FROM pg_tables WHERE schemaname='public' ORDER BY tablename")).rows.map(r => r.tablename);
}
async function fingerprint(client, table) {
    const { rows } = await client.query(`SELECT row_to_json(t)::text AS value FROM public.${quote(table)} t`);
    const values = rows.map(r => JSON.stringify(JSON.parse(r.value))).sort();
    return { count: values.length, hash: createHash('sha256').update(JSON.stringify(values)).digest('hex') };
}
async function main() {
    const src = new Client(source), dst = new Client(destination);
    await src.connect();
    try {
        await dst.connect();
        await src.query("SET TIME ZONE 'UTC'");
        await dst.query("SET TIME ZONE 'UTC'");
        if ((await tables(dst)).length) throw new Error('Neon is not empty. Refusing to overwrite it.');
        await src.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
        const names = await tables(src);
        const snapshot = (await src.query('SELECT pg_export_snapshot() AS snapshot')).rows[0].snapshot;
        const directory = path.resolve(__dirname, '../.temp');
        fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
        fs.writeFileSync(caFile, rootCertificates.join('\n'), { mode: 0o600 });
        const backup = path.join(directory, `pre-neon-${Date.now()}.dump`);
        run('pg_dump', ['--format=custom', '--no-owner', '--no-acl', `--snapshot=${snapshot}`, '--file', backup], source);
        fs.chmodSync(backup, 0o600);
        console.log('Backup saved:', backup);
        run('pg_restore', ['--dbname', destination.database, '--no-owner', '--no-acl', '--single-transaction', '--exit-on-error', backup], destination);
        const targetNames = await tables(dst);
        if (JSON.stringify(names) !== JSON.stringify(targetNames)) throw new Error('Table list verification failed. App connection unchanged.');
        for (const name of names) {
            const before = await fingerprint(src, name), after = await fingerprint(dst, name);
            if (before.count !== after.count || before.hash !== after.hash) throw new Error(`Verification failed for ${name}. App connection unchanged.`);
            console.log(`${name}: ${after.count} rows verified`);
        }
        await src.query('COMMIT');
        console.log('Migration verified. Source database preserved.');
    } finally {
        await src.end();
        await dst.end();
    }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
