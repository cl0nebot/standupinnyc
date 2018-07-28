import { Prisma } from "./generated/prisma";

const prisma = new Prisma({
  endpoint: "https://standupin-dev.herokuapp.com/noahslist-api/staging",
  debug: true
});

export default prisma;
