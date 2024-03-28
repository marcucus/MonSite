"use client";

import Head from "next/head";
import "./globals.css";

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
      <body className={``}>
          {children}
      </body>
    </html>
  );
}
