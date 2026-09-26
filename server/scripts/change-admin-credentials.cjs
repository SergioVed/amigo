// Run from server with ADMIN_NEW_EMAIL and ADMIN_NEW_PASSWORD in the environment.
// Optionally set ADMIN_ENV_FILE (defaults to .env.development.local).
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { Client } = require('pg');

async function main() {
  const email = process.env.ADMIN_NEW_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_NEW_PASSWORD;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password) {
    throw new Error('Set ADMIN_NEW_EMAIL to a valid email and ADMIN_NEW_PASSWORD to a nonempty password.');
  }
  const envPath = path.resolve(__dirname, '..', process.env.ADMIN_ENV_FILE || '.env.development.local');
  const config = { ...dotenv.parse(fs.readFileSync(envPath)), ...process.env };
  if (config.ADMIN_EMAIL || config.ADMIN_PASSWORD) {
    throw new Error('Remove the ADMIN_EMAIL/ADMIN_PASSWORD login overrides before updating database credentials.');
  }
  const client = new Client({
    host: config.DB_HOST,
    port: Number(config.DB_PORT || 5432),
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    connectionTimeoutMillis: 10000,
  });
  await client.connect();
  try {
    await client.query('BEGIN');
    const hash = await bcrypt.hash(password, 12);
    const result = await client.query(
      'UPDATE ceo SET email = $1, password = $2, "refreshJti" = NULL, "updatedAt" = NOW() WHERE id = 1 RETURNING id',
      [email, hash],
    );
    if (result.rowCount !== 1) throw new Error('Expected exactly one admin with id 1.');
    const { rows } = await client.query('SELECT email, password FROM ceo WHERE id = 1');
    if (rows[0].email !== email || !(await bcrypt.compare(password, rows[0].password))) {
      throw new Error('Credential verification failed.');
    }
    await client.query('COMMIT');
    console.log(`Admin credentials updated and verified for ${email}.`);
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(`Admin credential update failed: ${error.code || error.message}`);
  process.exitCode = 1;
});
