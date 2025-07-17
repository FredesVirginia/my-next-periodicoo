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

  <div className="flex-grow bg-gray-100 border mx-40 mt-10 ">
    <h1 className="text-3xl text-sky-900 font-bold text-center">Articulos</h1>
    {children}
  </div>

  <Footer />
</div>

  );
}
