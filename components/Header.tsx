import Link from "next/link";
import { useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";
import Intro from "./layouts/Intro";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
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
  <div className="hidden md:flex justify-between py-20 bg-gray-200 h-32 items-center md:px-54 md:pb-20">
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
      <div>
        <p className="font-bold text-gray-700">Desarrollo Web</p>
      </div>
      <div>
        <p className="font-bold text-gray-700">Existencialismo</p>
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
