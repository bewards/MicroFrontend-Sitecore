import "@/styles/globals.css";
import type { AppProps } from "next/app";
import App from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (context: any): Promise<any> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
