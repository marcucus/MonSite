"use client";

import Head from "next/head";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
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
      <body className={`bg-[#070722] bg-bgStars bg-contain w-full`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
