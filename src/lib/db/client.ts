import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '~/lib/env/server';
import * as auth from './schema/auth';
import * as document from './schema/document';

const connectionString = env.DB_URL;

export const client = postgres(connectionString, {
  max: 99,
});

const db = drizzle(client, {
  schema: {
    auth,
    document,
  },
});

export default db;
