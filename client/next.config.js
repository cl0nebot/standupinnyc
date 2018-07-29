const withTypescript = require('@zeit/next-typescript')
const webpack = require('webpack')
/**
 * After the next require you can use process.env to get your secrets
 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  console.log(process.env.GRAPHQL_API_URL)
}
module.exports = withTypescript({
  publicRuntimeConfig: { // Will be available on both server and client
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
  }
})

