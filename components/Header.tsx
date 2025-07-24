import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import Intro from "./layouts/Intro";
export default function Header() {
  const router = useRouter();
  // Define las rutas donde quieres mostrar Intro
  const rutasConIntro = ["/blog", "/about"]; // Solo home y "otra-pagina"
  const [menuOpen, setMenuOpen] = useState(false);
  const mostrarIntro = rutasConIntro.includes(router.pathname);
  return (
  <div>
  {/* 🟢 Visible SOLO en pantallas chicas */}
 <div className="bg-gray-200 flex items-center justify-between px-5 pt-20 pb-16 md:hidden">
        <h2 className="text-sky-900 h1-description">Bolas de Algodón</h2>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <MdMenu size={28} />
        </button>
      </div>

      {/* 🟡 Menú móvil desplegable */}
      {menuOpen && (
        <div className="flex flex-col absolute top-20 right-12 p-5 items-center gap-4 w-80 rounded-2xl bg-gray-100 py-4 md:hidden">
          <Link href={"/blog"} className="font-bold text-gray-700">Inicio</Link>
          <Link href={"/about"} className="font-bold text-gray-700">Sobre Mí</Link>
          <p className="font-bold text-gray-700">Desarrollo Web</p>
          <p className="font-bold text-gray-700">Existencialismo</p>
          <a
            className="font-bold text-gray-700"
            href="https://portfolio-wpmr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitio Web
          </a>
        </div>
      )}

  {/* 🔵 Visible SOLO en pantallas md y mayores */}
  <div className="hidden md:flex justify-between py-20 bg-gray-200 h-32 items-center md:pl-52 md:pr-32 md:pb-20">
    <div className="h1-description md:flex-[2] flex-[4] bg-re-400">
      <h2 className="text-sky-900">Bolas de Algodón</h2>
    </div>
    <div className="bg-ed-700 flex flex-[3] justify-center items-center gap-10 text-base">
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
     <div className="relative group inline-block">
  <p className="font-bold text-gray-700 cursor-pointer">
    Desarrollo Web
  </p>
  <span className=" animate__animated animate__rubberBand  absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
    Próximamente
  </span>
</div>

<div className="relative group inline-block">
  <p className="font-bold text-gray-700 cursor-pointer">
    Existencialismo
  </p>
  <span className="animate__animated animate__rubberBand  absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
    Próximamente
  </span>
</div>

      <div>
        <a
          className="font-bold text-gray-700"
          href="https://portfolio-wpmr.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio Web
        </a>
      </div>
    </div>
  </div>

  {mostrarIntro && <Intro />}
</div>


  );
}
