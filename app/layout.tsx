"use client";

import Head from "next/head";
import type { AppProps } from "next/app";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/navbar";

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
  pageProps: AppProps;
}>) {
  return (
    <html>
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={``}>
          <Toaster position="top-right" />
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
