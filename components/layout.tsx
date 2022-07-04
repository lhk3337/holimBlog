import React from "react";
import Footer from "./footer";
import Head from "next/head";
import Header from "./header";
interface ILayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Head>
        <title>holim log</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}