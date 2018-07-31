import { GraphQLServerLambda } from 'graphql-yoga'
import serverConfig from "./serverConfig";
const lambda = new GraphQLServerLambda(serverConfig)

export const server = lambda.graphqlHandler
export const playground = lambda.playgroundHandler
