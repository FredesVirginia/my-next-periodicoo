import React from "react";
import Image from "next/image";
import FONDO from "../public/assets/img/fondo25.jpg";
export default function Header() {
  return (
    <div style={{ backgroundColor: "#cdcdcd" }} className=" h-27 flex justify-between items-center  px-30">
      <p className="font-menu">Bolas de Algodon</p>
      <div className="relative h-46 w-80">
        <Image src={FONDO} alt="Fondo" fill style={{ objectFit: "contain" }} priority className="" />
      </div>
    </div>
  );
}
