# Single teacher super power

Run from `server` with Node.js 20.6+ and the target database environment file:

```sh
node --env-file=.env.development.local scripts/migrate-single-super-power.cjs
```

Deploy the server, admin, and website together with this migration: the API's
`superPower` field changes from an array to one required string.

The migration runs in a transaction, keeps the first non-empty value in array
order, trims it, and preserves every original array in
`professor_super_power_backup_20260926`. It aborts without changes if any teacher
has no usable value. The database enforces a non-null, non-blank text value.
Re-running the migration after success is safe.
