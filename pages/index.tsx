import { Lightning } from "@/components/animation/rayos";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaLaptopCode, FaLocationArrow } from "react-icons/fa6";
import { PiPottedPlantBold } from "react-icons/pi";
import FONDO1 from "../public/assets/img/fondo13.jpg";
import ME from "../public/assets/img/yoooooooooooooo.png";
export default function Home() {
  const router = useRouter();
  const [loading, setLoing] = useState(false);

  const handleClick = () => {
    setLoing(true);
    setTimeout(() => {
      router.push(`/blog/`);
    }, 1000);
  };

  if (loading) {
    return (
      <div
        style={{ width: "100%", height: "100vh", position: "relative" }}
        className="opacity-0 transition-opacity duration-1000 ease-out"
        onAnimationEnd={(e) => {
          e.currentTarget.classList.remove("opacity-0");
          e.currentTarget.classList.add("opacity-100");
        }}
      >
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
    );
  }
  return (
   <div className="relative">
  {/* Imagen de fondo fija y responsiva */}
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
    }}
  >
    <Image
      src={FONDO1}
      alt="Fondo"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Contenido encima de la imagen */}
  <div className="relative z-10 text-white px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
    {/* Header con título e íconos */}
    <motion.div
      className="flex flex-col lg:flex-row justify-between pt-10 gap-6"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div>
        <p className="text-3xl h1-inicio  sm:text-4xl text-center md:text-5xl font-bold">
          Bolas de Algodón
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          {
            text: "Desarrollo Web",
            icon: <FaLaptopCode size={24} fill="white" />,
          },
          {
            text: "Existencialismo",
            icon: <PiPottedPlantBold size={24} fill="white" />,
          },
          {
            text: "Mamarachismo Ilustrado",
            icon: <CgSmileMouthOpen size={24} fill="white" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
          >
            <p className="font-semibold text-sm">{item.text}</p>
            {item.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>

    <div className="border-b border-white/30 my-8"></div>

    {/* Sección de presentación con texto e imagen */}
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Texto de presentación */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-sm sm:text-base max-w-lg text-center lg:text-center">
        <p>
          Soy Vicky, también conocida como John Clein. Desarrolladora web.
        </p>
        <p className="mt-2">
          Me gusta pensar que llevo dentro a un noble inglés rebelde del siglo XVII.
        </p>
        <p className="mt-2">
          En este blog hablo de desarrollo web, sí… Pero también de las preguntas que no se responden con código: reflexiones, vivencias y poemas que nacen del caos y la calma.
        </p>
      </div>

      {/* Imagen de perfil */}
      <motion.div
        className="rounded-2xl w-64 h-64 sm:w-72 sm:h-72 bg-white/10 backdrop-blur-md p-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={ME}
          alt="Yo"
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
      </motion.div>
    </motion.div>

    {/* Botón */}
    <motion.div
      className="flex justify-center mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <button
        onClick={handleClick}
        className=" animate__animated animate__pulse animate__slow animate__infinite	infinite flex items-center gap-3 bg-white/10 backdrop-blur-md py-2 px-4 rounded-2xl text-sm sm:text-base hover:bg-white/20 transition"
      >
        Una mente inquieta escribe así <FaLocationArrow />
      </button>
    </motion.div>

    {/* Footer */}
    <motion.div
      className="flex justify-center mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <p className="text-white/70 text-xs sm:text-sm text-center py-5">
        © 2025 Fredes Virginia - Todos los derechos reservados
      </p>
    </motion.div>
  </div>
</div>

  );
}
