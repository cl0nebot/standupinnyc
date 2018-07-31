import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import { Prisma, ShowWhereInput, ShowOrderByInput } from "./generated/prisma";
import { Context } from "./utils";
import { importShows } from "./importer";

interface Args {
  where: ShowWhereInput
}
const resolvers = {
  Query: {
    venues(parent, args, context: Context, info) {
      return context.db.query.venues(args, info);
    },
    venuesConnection(parent, args, context: Context, info) {
      return context.db.query.venuesConnection(args, info);
    },
    showsConnection(parent, args, context: Context, info) {
      return context.db.query.showsConnection(args, info);
    },
    comediansConnection(parent, args, context: Context, info) {
      return context.db.query.comediansConnection(args, info);
    },

    comedians(parent, args, context: Context, info) {
      return context.db.query.comedians(args, info);
    },

    shows(parent, args, context: Context, info) {
      const {where} =args
      const query = {
        ...args,
        orderBy: "startTime_ASC",
        where: {
          ...where,
          startTime_gte: new Date().toISOString()
        }
      }
      return context.db.query.shows(query, info);
    }
  },
  Mutation: {
    async updateShowsForVenue(parent, { where }, ctx: Context, info) {
      //  returnns an array of {id: } objects containing a show Id
      const venue = await ctx.db.query.venue({ where });
      const showIds = await importShows(venue);
      return ctx.db.query.shows({ where: { id_in: showIds } }, info);
    }
  }
};

const server = new GraphQLServer({
  resolvers,
  typeDefs: "./src/schema.graphql",
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: false // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    })
  })
});
server.start(() => console.log("Server is running on http://localhost:4000"));
