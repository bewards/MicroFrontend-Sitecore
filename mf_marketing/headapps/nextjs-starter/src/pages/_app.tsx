/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SitecorePageProps } from 'lib/page-props';
import Bootstrap from 'src/Bootstrap';
import App from 'next/app';

// import 'assets/main.scss';

function MyApp({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  return (
    <>
      <Bootstrap {...pageProps} />
      {/*
        // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
        // Note Next.js does not (currently) provide anything for translation, only i18n routing.
        // If your app is not multilingual, next-localization and references to it can be removed.
      */}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context: any): Promise<any> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};

export default App;
