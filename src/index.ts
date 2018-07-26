import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'
import { forwardTo } from "prisma-binding";
import { importShows } from "./importer";
import { map } from "lodash";


const resolvers = {
  Query: {
    venues(parent, args, context: Context, info) {
      return context.db.query.venues(args, info)
    },
    comedians(parent, args, context: Context, info) {
      return context.db.query.comedians(args, info)
    }

  },
  Mutation: {

    async updateShowsForVenue(parent, { where }, ctx: Context, info) {
      //  returnns an array of {id: } objects containing a show Id
      const venue = await ctx.db.query.venue({where})
      const showIds = await importShows(venue);
      return ctx.db.query.shows({ where: { id_in: showIds } }, info);
    },

    // ...show,
    // ...venue
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'http://localhost:4466',
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
