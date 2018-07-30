import App from "../components/App";
import Header from "../components/Header";
import ComedianList from "../components/ComedianList";
import Head from 'next/head'

export default () => (
  <App>
    <Head>
      <title>Comedians</title>
    </Head>

    <Header />
    <ComedianList />
  </App>
);
