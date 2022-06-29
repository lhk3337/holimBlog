import React from "react";
import Footer from "./footer";
import Header from "./header";
interface ILayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
