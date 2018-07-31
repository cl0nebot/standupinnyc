import { Prisma } from "./generated/prisma";
import resolvers from "./resolvers"

const serverConfig = {
  resolvers,
  typeDefs: "./src/schema.graphql",
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
      debug: false // log all GraphQL queries & mutations sent to the Prisma API
    })
  })
}

export default serverConfig