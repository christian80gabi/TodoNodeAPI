# Todo Node API

Todo Node.JS API using TypeScript and Prima

- TypeScript 5.x
- Prima 4.x

## # Init

Create an `.env` file in the root directory. Drop the script below inside.
This is the configuration of the database PostgreSQL (`DATABASE URL`).

```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:password@localhost:5432/tododb?schema=public"
```

Then run the app with `npx ts-node src/index.ts` from the terminal.

## # Test

Under `test > src > index.ts`, there is a single method creating a user and retrieving and the users and their Tasks (TODOs) created from the database.
