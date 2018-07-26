import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import { Context } from "./utils";
import { importShows } from "./importer";

const resolvers = {
  Query: {
    venues(parent, args, context: Context, info) {
      return context.db.query.venues(args, info);
    },
    comedians(parent, args, context: Context, info) {
      return context.db.query.comedians(args, info);
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
      endpoint: "http://localhost:4466",
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    })
  })
});
server.start(() => console.log("Server is running on http://localhost:4000"));
