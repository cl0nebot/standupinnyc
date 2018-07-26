const { Prisma } = require("prisma-binding")

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466"
})



const getVenuesForScraper = async ({scraper}) => {
  return prisma.query.venues(
    {where: {scraper}},
    "{ id name stubsiteId ticketmasterId slug}")
}

export {getVenuesForScraper}

