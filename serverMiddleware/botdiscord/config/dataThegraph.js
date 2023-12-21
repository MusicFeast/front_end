//const gql = require('graphql-tag');
const ApolloClient = require('apollo-client').ApolloClient
const fetch = require('node-fetch')
const createHttpLink = require('apollo-link-http').createHttpLink
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.GRAPH_URL, //"https://api.thegraph.com/subgraphs/name/hrpalencia/pruebas2",
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

//async function colsutaGraphql (query, variables) {
const colsutaGraphql = async (query, variables) => {
  try {
    if (!variables) {
      const result = await client.query({
        query,
      })
      return result.data
    } else {
      const result = await client.query({
        query,
        variables,
      })
      return result.data
    }
  } catch (error) {
    return []
  }
}

module.exports = colsutaGraphql
