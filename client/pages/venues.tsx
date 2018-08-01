import Head from "next/head";
import App from "../components/App";
import VenueList from "../components/VenueList";

export default () => (
  <App>
    <Head>
      <title>Venues</title>
    </Head>
    <VenueList />
  </App>
);
