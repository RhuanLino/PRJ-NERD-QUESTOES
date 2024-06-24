import { PrismaClient } from '@prisma/client';
import postgres from "postgres";

export let prisma;
export function connectDb() {
  if (prisma) {
    return;
  }

  prisma = new PrismaClient();
}

export async function disconnectDB() {
  await prisma?.$disconnect();
}

// pages/api/hello_world.js

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

PGPASSWORD = decodeURIComponent(PGPASSWORD);

const conn = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
});


    async function Valida() {
        return await conn.query("SELECT * FROM hello_world");
    }
    