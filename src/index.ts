import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'
import { forwardTo } from "prisma-binding";
import { findOrCreateShows } from "./formatComedians";
import { map } from "lodash";


const resolvers = {
  Query: {
    feed(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: true } }, info)
    },
    drafts(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: false } }, info)
    },
    post(parent, { id }, context: Context, info) {
      return context.db.query.post({ where: { id: id } }, info)
    },
    venues(parent, args, context: Context, info) {
      return context.db.query.venues(args, info)
    }
  },
  Mutation: {
    createDraft(parent, { title, text }, context: Context, info) {
      return context.db.mutation.createPost(
        { data: { title, text } },
        info,
      )
    },
    deletePost(parent, { id }, context: Context, info) {
      return context.db.mutation.deletePost({ where: { id } }, info)
    },
    publish(parent, { id }, context: Context, info) {
      return context.db.mutation.updatePost(
        {
          where: { id },
          data: { isPublished: true },
        },
        info,
      )
    },
    async findOrCreateShows(parent, { shows }, ctx: Context, info) {
      //  returns an array of {id: } objects containing a show Id
      const showIdResponse = await findOrCreateShows(ctx.db, shows);
      const showIds = map(showIdResponse, "id");
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
