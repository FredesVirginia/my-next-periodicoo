import React from "react";
import plantilla1 from "../public/assets/img/plantilla1.png";
import plantilla2 from "../public/assets/img/plantilla2.png";
import Image from "next/image";

export default function createNews() {
  return (
    <div className="bg-red-400 py-10">
      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-black font-bold text-2xl">Create Blog</h1>
        <button className="py-2 px-10 bg-white rounded-lg my-10">
          Elige plantilla
        </button>
      </div>

      <div className="h-96 flex gap-5  my-10  py-5 justify-center items-center ">
       
        <div className="relative py-5 rounded-2xl bg-white w-86 h-full ">
          <Image
            src={plantilla2}
            alt="Fondo1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="relative w-86 h-full py-5 rounded-2xl bg-white">
          <Image
            src={plantilla2}
            alt="Fondo1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

          <div className="relative w-86 h-full py-5 rounded-2xl bg-white">
          <Image
            src={plantilla1}
            alt="Fondo1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
