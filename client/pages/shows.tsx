import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import App from "../components/App";
import ShowList from "../components/ShowList";

const GET_SHOWS = gql`{
  shows {
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
}`

export default () => (
  <App>
    <Head>
      <title>Comedians</title>
    </Head>

    <Query query={GET_SHOWS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (<ShowList shows={data.shows} />)
      }}
    </Query>
  </App>

)

