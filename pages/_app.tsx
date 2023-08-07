import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from "react";
import { SignIn } from "./api/Home/HomeService";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    SignIn();
  }, []);
  return (

    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Layout>

  );
}
