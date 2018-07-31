import { Prisma } from "./generated/prisma";
const secret = process.env.PRISMA_SECRET
const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: false,
  secret
});

export default prisma;
