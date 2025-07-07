import React from "react";
import Image from "next/image";
import FONDO from "../public/assets/img/fondo25.jpg";
export default function Header() {
  return (
<div>
   <div  className="flex flex-col items-center justify-center pt-10">
        <h1 className="h1-blog text-8xl">Bolas de algodon</h1>
        <p className="text-gray-400">MULTIPUPOSE MAGACZIINE AND BLOG THEME</p>
      </div>

      <div className="border-2 mt-5  font-bold flex border-gray-300 justify-center gap-30 py-10">
        <p>INICIO</p>
        <p> TEGNOLOGIA</p>
        <p>PERSONAL</p>
      </div>
</div>
  );
}
