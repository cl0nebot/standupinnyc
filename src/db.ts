import { Prisma } from './generated/prisma'

const prisma = new Prisma({
  endpoint: "http://localhost:4466",
  debug: true
})


export default prisma