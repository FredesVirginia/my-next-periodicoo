import Image from "next/image";
import PERFIL from "../public/assets/img/yoooooooooooooo.png";
import { TiHome } from "react-icons/ti";
import DarkModeToggle from "./animation/darkMode";
import { useEffect, useState } from "react";
import ThemeToggle from "./animation/darkMode";
import Link from "next/link";
export default function Header() {
    const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Al montar el componente, sincroniza con la clase html
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  return (
   <div>
     <div className="flex  justify-between mx-36 pt-10 bg-gray-200 h-30 items-center px-10 rounded-2xl pb-10">

      
        <div className="h1-description flex-[4] bg-re-400">
          <h2 className="text-sky-900">Bolas de Algodon</h2>
        </div>
        <div className="bg-ed-700 flex flex-[5] justify-center items-center gap-10 bg-red900 text-sm ">
            <div>
          <Link href={"/"}> <TiHome/></Link>
          </div>
            <div>
            <p className="font-bold text-gray-700">Sobre Mi</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Desarrollo Web</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Mamarachismo Ilustrado</p>
          </div>

           
          <div className=" w-10  rounded-2xl">
            <Image
              src={PERFIL}
              alt="Fondo"
              priority
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
   </div>
  );
}
