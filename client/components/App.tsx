import Head from "next/head"
import Header from "./Header";

export default ({ children }) => (
  <main className="pure-type">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" />
      <link rel="stylesheet" href="https://cdn.rawgit.com/tilomitra/csstypography/master/css/pure-typography.css" />

    </Head>
    <Header/>
    <div className="content">
      {children}
    </div>
    <style jsx global>{`

      body {
        margin: 0;
        padding: 25px 50px;
      }
      .content {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 20px;
      }
      a {
        color: #1F1F1F;
      }

      main {
        max-width: 1000px;
        margin 0 auto;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </main>
);
