import React, { useState } from "react";
import plantilla1 from "../public/assets/img/plantilla1.png";
import plantilla2 from "../public/assets/img/plantilla2.png";
import Image from "next/image";
import CreateFirtPlantilla from "@/components/plantillasTypePeriodico/createPlantillas/createFirtPlantilla";
import { useRouter } from "next/router";
import { DotLoader } from "react-spinners";

export default function createNews() {
  const router = useRouter();
  const [loading, setLoing] = useState(false);

  const handleClick = (type: string) => {
    setLoing(true);
    setTimeout(() => {
      router.push(`//createBlog/${type}`);
    }, 900);
  };

  if (loading) {
    return (
      <div className="fixed inset-0  flex justify-center items-center py-5">
        <DotLoader color="#ca5d36" />
      </div>
    );
  }
  return (
    <div className="bg-red-400 py-10">
      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-black font-bold text-2xl">Create Blog</h1>
        <button className="py-2 px-10 bg-white rounded-lg my-10">
          Elige plantilla
        </button>
      </div>

      <div className="h-96 flex gap-5  my-10  py-5 justify-center items-center ">
        <div
          className="relative py-5 rounded-2xl bg-white w-86 h-full "
          onClick={() => handleClick("FIRTS")}
        >
          <Image
            src={plantilla2}
            alt="Fondo1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div
          className="relative w-86 h-full py-5 rounded-2xl bg-white"
          onClick={() => handleClick("SECOND")}
        >
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
