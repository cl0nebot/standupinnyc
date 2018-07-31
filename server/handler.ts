import 'source-map-support/register'

import { GraphQLServerLambda } from 'graphql-yoga'
import serverConfig from "./src/serverConfig";
const lambda = new GraphQLServerLambda(serverConfig)

export const server = lambda.graphqlHandler
export const playground = lambda.playgroundHandler
