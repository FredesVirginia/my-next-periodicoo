import React from "react";
import Image from "next/image";
import FONDO from "../public/assets/img/fondo30.jpg";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#7a997f" }} className="h-27 flex justify-between items-center  px-30">
      <p className="font-menu text-white">Bolas de Algodon</p>
      <div className="relative h-26 w-96">
        <Image src={FONDO} alt="Fondo" fill style={{ objectFit: "contain" }} priority className="" />
      </div>
    </div>
  );
}