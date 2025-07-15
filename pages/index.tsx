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
    <div className="relative w-full text-white ">
      {/* Imagen de fondo ocupando toda la pantalla */}
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
          alt={"hjhj"}
          fill
          style={{ objectFit: "cover" }}
          className=""
          priority
        />
      </div>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10">
        <motion.div
          className="flex pt-10 justify-between mx-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="bg-blue00">
            <p className="h1-inicio md:text-2xl text-4xl">Bolas de Algodon</p>
          </div>
          <div className="flex bg-red-00 bg-blu0 justify-between gap-5">
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
                className="flex bg-white/10 backdrop-blur-md justify-center items-center px-6 gap-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              >
                <p className="font-bold rounded-xl py-1">{item.text}</p>
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="border-2 my-5"></div>

        <motion.div
          className="flex bg-re-400 mx-10 justify-center pt-10 gap-20 px-20 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md  py-5 px-4 rounded-3xl flex items-center flex-col gap-1">
            <p className="text-left ">
              Soy Vicky, también conocida como John Clein. Desarrolladora web.
            </p>
            <p className="">
              Me gusta pensar que llevo dentro a un noble inglés rebelde del
              siglo XVII.
            </p>
            <p className=" text-center ">
              En este blog hablo de desarrollo web, sí… Pero también de las
              preguntas que no se responden con código: reflexiones, vivencias y
              poemas que nacen del caos y la calma.
            </p>
          </div>

          <motion.div
            className=" bg-rd-400 justify-center rounded-2xl p-1 fle1 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-76 h-76 bg-red0 bg-white/10 backdrop-blur-md p-3 rounded-2xl">
              <Image
                src={ME}
                alt="Fondo"
                priority
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>









        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <button
            onClick={() => handleClick()}
            className="-mt-10 flex items-center gap-4 bg-white/10 backdrop-blur-md py-2 px-4 rounded-2xl cursor-pointer"
          >
            Una mente inquieta escribe así <FaLocationArrow />
          </button>
        </motion.div>
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-black font-bold pb-5">
            © 2025 Fredes Virginia - Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </div>
  );
}
