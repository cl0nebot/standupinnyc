import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import serverConfig from "./serverConfig";

const server = new GraphQLServer(serverConfig)
server.start(() => console.log("Server is running on http://localhost:4000"));
