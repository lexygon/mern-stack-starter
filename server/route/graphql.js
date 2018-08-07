import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../graphql/resolvers';
import { typeDefs } from '../graphql/schema';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

module.exports.apolloServer = apolloServer;
