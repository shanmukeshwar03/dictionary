import { Provider } from "react-redux";
import store from "redux/store";
import Head from "next/head";
import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="flex w-full my-8 justify-center">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="online dictionary" />
        <meta name="keywords" content="dictionary meanings words" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN" />
        <title>dictionary</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default App;
