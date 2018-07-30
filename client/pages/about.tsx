import Head from "next/head";
import App from "../components/App";
import Header from "../components/Header";

export default () => (
  <App>
      <Head>
      <title>Standupin.nyc</title>
    </Head>

    <Header />
    <article>
      <h1>Standup in NYC</h1>
      <p>
        It's a huge pain to figure out what shows are where in new york city. This site fixes that.
      </p>

    </article>
  </App>
);
