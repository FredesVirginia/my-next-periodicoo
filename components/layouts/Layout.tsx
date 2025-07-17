import React from "react";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
   <div className="min-h-screen flex flex-col">
  <Header />

  <div className="flex-grow  mx-40 my-10 ">
    
    {children}
  </div>

  <Footer />
</div>

  );
}
