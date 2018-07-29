import { Prisma } from "./generated/prisma";

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: false
});

export default prisma;
