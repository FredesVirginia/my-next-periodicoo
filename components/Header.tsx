import Link from "next/link";
import { useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";
import Intro from "./layouts/Intro";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  // Define las rutas donde quieres mostrar Intro
  const rutasConIntro = ["/blog", "/about"]; // Solo home y "otra-pagina"

  const mostrarIntro = rutasConIntro.includes(router.pathname);
  return (
    <div>
      <div className="flex  justify-between   py-20  bg-gray-200 h-32 items-center md:px-54 px-72  pb-20">
        <div className="h1-description md:flex-[2] flex-[4] bg-re-400 ">
          <h2 className="text-sky-900">Bolas de Algodon</h2>
        </div>
        <div className="bg-ed-700 flex flex-[3] justify-center items-center gap-10  text-base ">
          <div>
            <Link href={"/blog"}>
              <TiHome />
            </Link>
          </div>
          <div>
            <Link href={"/about"}>
              <p className="font-bold text-gray-700">Sobre Mi</p>
            </Link>
          </div>
          <div>
            <p className="font-bold text-gray-700">Desarrollo Web</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Existencialismo</p>
          </div>

          <div>
           
            <a className="font-bold text-gray-700" href="https://portfolio-wpmr.vercel.app/" target="_blank" rel="noopener noreferrer">
              Sitio Web
            </a>
          </div>
        </div>
      </div>
      {mostrarIntro && <Intro />}
    </div>
  );
}
