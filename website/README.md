# AMIGO website data

The public website reads bundled content from `src/data.ts` and does not need the NestJS backend or PostgreSQL at runtime. Images and videos still use their original external URLs.

The file contains `teachers`, `feedbacks`, `prices`, and `ceos`, exported from the local PostgreSQL database. IDs and original creation/update timestamps are preserved. Passwords, login codes, and session tokens are excluded.

To change website content, edit `src/data.ts`, run `npm run build`, and deploy the updated `dist` directory. Changes in the admin panel or database no longer update the public website automatically.

## Development

```sh
npm install
npm start
```

## Build

```sh
npm run build
```
