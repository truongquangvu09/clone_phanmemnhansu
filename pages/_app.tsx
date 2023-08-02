import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { SignIn } from "./api/Home/HomeService";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    SignIn();
  }, []);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
