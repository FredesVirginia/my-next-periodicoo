import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function tegnologia() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
      <Header />

      <main className="p-10 overflow-auto">
        <h1 className="text-3xl font-bold">🏅 Sección Tecnología</h1>
        <p className="mt-4">Aquí irán las noticias deportivas del día.</p>
        
      </main>

      <Footer />
    </div>
  );
}
