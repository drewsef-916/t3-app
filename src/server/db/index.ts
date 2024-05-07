/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";
import postgres from "postgres";
import { env } from "~/env";

import * as schema from './schema';

const queryClient = postgres(env.POSTGRES_URL)

export const db = drizzle(queryClient, { schema });
