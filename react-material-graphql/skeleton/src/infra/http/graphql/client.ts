import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

let apolloClient: ApolloClient<any>;

const createWsLink = (url: string) =>
  new GraphQLWsLink(
    createClient({
      url,
    }),
  );

const createHttpLink = (uri: string) =>
  new HttpLink({
    uri,
  });

const getLink = (httpUrl: string, wsUrl: string) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    createWsLink(wsUrl),
    createHttpLink(httpUrl),
  );

export const createApolloClient = (httpUrl: string, wsUrl: string) => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      name: "${{ values.component_id }}",
      cache: new InMemoryCache(),
      link: getLink(httpUrl, wsUrl),
    });
  }

  return apolloClient;
};
