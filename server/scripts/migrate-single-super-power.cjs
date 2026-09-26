const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { Client } = require('pg');

async function main() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    await client.connect();
    try {
        await client.query(readFileSync(resolve(__dirname, '../migrations/20260926-single-super-power.sql'), 'utf8'));
        const { rows } = await client.query(`SELECT count(*)::int AS teachers,
            count(*) FILTER (WHERE super_power IS NULL OR length(btrim(super_power)) = 0)::int AS invalid
            FROM professor`);
        console.log('Single super power migration complete:', rows[0]);
    } finally {
        await client.end();
    }
}
main().catch(error => {
    console.error('Migration failed:', error.message || error.code || 'Database connection failed');
    process.exitCode = 1;
});
