import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import FONDO from "../public/assets/img/fondo52.jpg";
import { useBlog } from "@/hooks/blogs/useHookBlog";
import Footer from "@/components/Footer";

export default function blog() {
  const { data } = useBlog();
  console.log("LA DATA ES ", data);
  return (
    <div className="py">
      <Header />

      <div className=" mx-40 mt-10 h-[30rem] relative overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image src={FONDO} alt="Fondo" fill style={{ objectFit: "cover" }} priority />
        </div>

        {/* Contenido encima */}
        <div className="relative z-10 w-[30rem] h-96 bg-white text-black p-8 my-13 ml-20">
          <p className="text-[12px] text-gray-500 pt-5">FEBRERO 8 - BAKER STREET- 2000</p>
          <p className="pt-5 text-2xl font-bold">Bienvenido al rincón donde Sherlock Holmes tomaría mate y escribiría en React</p>
          <p className="text-[11px] pt-4 text-gray-600">
            Ni Watson lo hubiese visto venir: reflexiones, líneas de código y preguntas que ni la documentación responde.
          </p>
          <p></p>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Artículos</h2>
          <div className="max-w-7xl mx-auto p-6">
            {!data ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">Cargando artículos...</p>
              </div>
            ) : data.length === 0 ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">No hay artículos disponibles.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((article) => {
                  

                  return (
                    <div
                      key={article.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.imagen1}
                          alt={`Imagen de `}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                          priority
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.titulo}</h3>
                        <p className="text-gray-600 mb-4">{article.resumen}</p>
                        <p className="text-sm text-gray-500 italic">Autor: {article.autor}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
