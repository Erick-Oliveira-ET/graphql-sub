"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const SampleResolver_1 = require("./resolver/SampleResolver");
const type_graphql_1 = require("type-graphql");
async function bootstrap() {
    // Build the TypeGraphQL schema
    const schema = await type_graphql_1.buildSchema({
        resolvers: [SampleResolver_1.SampleResolver],
    });
    // Create GraphQL server
    const server = new apollo_server_1.ApolloServer({
        schema,
        playground: true,
        // you can pass the endpoint path for subscriptions
        // otherwise it will be the same as main graphql endpoint
        // subscriptions: "/subscriptions",
    });
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();
