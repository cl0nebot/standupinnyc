import App from "../components/App";
import ComedianList from "../components/ComedianList";
import Head from 'next/head'

export default () => (
  <App>
    <Head>
      <title>Comedians</title>
    </Head>

    <ComedianList />
  </App>
);
