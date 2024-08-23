import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/your-kit-id.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;