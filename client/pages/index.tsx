import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import App from "../components/App";
import ShowList from "../components/ShowList";
import LoadMoreButton from "../components/LoadMoreButton"
const GET_SHOWS = gql`
  query upcomingShows($where: ShowWhereInput, $after: String, $before: String) {
    data: showsConnection(first: 10,
     where: $where,
      after: $after, before: $before, orderBy: startTime_ASC) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          startTime
          price
          soldOut
          checkoutUrl
          comedians {
            slug
            name
            imageUrl
          }
          venue {
            name
            url
          }
        }
      }
    }
  }
`

export default () => {
  const currentTime = new Date()

  const variables = {
    where: {
      startTime_gte: currentTime.toISOString(),
      soldOut: false
    }
  }


return  (
  <App>
    <Head>
      <title>Standup in NYC</title>
    </Head>

    <Query query={GET_SHOWS} variables={variables}>
      {({ loading, error, data, fetchMore }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const shows = data.data.edges.map(edge => edge.node)
        return (<div>
        <ShowList shows={shows} />
        <LoadMoreButton data={data} fetchMore={fetchMore} />

         </div>)
      }}
    </Query>
  </App>

)

}