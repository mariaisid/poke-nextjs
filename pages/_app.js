import Head from "next/head";
import "../styles/globals.scss";
import Base from "../components/layout/Base";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prueba de NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Component {...pageProps} />
      </Base>
    </>
  );
}

export default MyApp;