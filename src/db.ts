import { Prisma } from './generated/prisma'

const prisma = new Prisma({
  endpoint: "http://localhost:4466"
})


export default prisma


const getVenuesForScraper = async ({scraper}) => {
  prisma
  return prisma.query.venues(
    {where: {scraper}},
    "{ id name stubsiteId ticketmasterId slug}")
}

export {getVenuesForScraper}

