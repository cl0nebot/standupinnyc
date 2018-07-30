import Head from "next/head";

import App from "../components/App";

import Header from "../components/Header";
import VenueList from "../components/VenueList";

export default () => (
  <App>
    <Head>
      <title>Standupin.nyc</title>
     </Head>
    <Header />
    <VenueList />
  </App>
);
