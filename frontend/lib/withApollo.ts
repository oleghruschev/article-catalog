import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: 'https://localhost:4000/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
      getDataFromTree: 'ssr',
    })
);