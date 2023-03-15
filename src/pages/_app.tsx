import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/graphql/client";
import { ThemeProvider } from "next-themes";
import { Provider as AnkrProvider } from "ankr-react";
import { WagmiConfig } from "wagmi";
import { useWagmi } from "@/lib/wagmi";
import RootLayout from "@/layouts/root";
import { LayoutKeys, Layouts } from "@/layouts";
import { NextComponentType, NextPageContext } from "next";
import React from "react";

import "@/styles/font.css";
import "@/styles/global.css";
import Head from "next/head";

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const PageLayout = Layouts[Component.Layout ?? "Default"];
  const apolloClient = useApollo(pageProps);
  const wagmiClient = useWagmi();

  return (
    <>
      <Head>
        <title>SplitFi — Trustless blockchain revenue distribution</title>
        <meta
          name="description"
          content="SplitFi — Trustless Multiparty Payment Distribution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class">
          <AnkrProvider>
            <WagmiConfig client={wagmiClient}>
              <RootLayout>
                <PageLayout>
                  <Component {...pageProps} />
                </PageLayout>
              </RootLayout>
            </WagmiConfig>
          </AnkrProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
