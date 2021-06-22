import Form from 'components/Form';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="home__container">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="online dictionary" />
        <meta name="keywords" content="dictionary meanings words" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN" />
        <title>dictionary</title>
      </Head>
      <Form />
      <div className="home__background"></div>
    </div>
  );
};

export default Home;
