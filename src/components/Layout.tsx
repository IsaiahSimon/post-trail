import React, { useState } from "react";
import type { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Spacer from "./Spacer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "Post Trail" }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Track your Post Trail packages effortlessly with Post Trail"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
