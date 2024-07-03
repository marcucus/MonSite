import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/navbar/footer";

export const metadata: Metadata = {
  title: "Marques Adrien - Présentation / Projets",
  description: "Bienvenue sur mon site ! Découvrez qui je suis et explorez les nombreux projets auxquels j'ai contribué.",
};

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
        <Toaster position="top-right" />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
