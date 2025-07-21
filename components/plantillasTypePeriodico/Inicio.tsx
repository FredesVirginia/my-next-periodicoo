import { motion } from "framer-motion";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { PiPottedPlantBold } from "react-icons/pi";
import Image from "next/image";
import fondo from "../../assets/img/fondo13.jpg";
import ME from "../../assets/img/yoooooooooooooo.png";
import { useRouter } from "next/router";

export default function Inicio() {
  const router = useRouter();
  return (
    <div className="relative w-full text-white p-4">
      {/* Imagen de fondo ocupando toda la pantalla */}
      <div className="absolute inset-0 z-0 flex">
        {/* <img src={fondo} alt="" className="w-full h-full object-cover" /> */}
        <Image
          src={fondo}
          alt=""
          fill
          className="object-cover"
          style={{ zIndex: -1 }} // opcional, según tu layout
          priority // si es una imagen importante para la carga inicial
        />
      </div>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10">
        <motion.div
          className="w-full pt-5 flex justify-center items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="bg-white/10 backdrop-blur-md h1-description rounded-xl px-9 py-1 text-center">
            Watson, no hay nada más estimulante que un buen enigma
          </p>
        </motion.div>

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
          className="flex bg-blue700 mx-10 justify-center ml-36 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md flex-1 py-5 px-4 rounded-3xl flex flex-col justify-center items-center">
            <p className="h1-edu text-center">Soy Vicky, también conocida como John Clein. Desarrolladora web.</p>
            <p className="h1-edu text-center">Me gusta pensar que llevo dentro a un noble inglés rebelde del siglo XVII.</p>
            <p className="h1-edu text-center">
              En este blog hablo de desarrollo web, sí… Pero también de las preguntas que no se responden con código: reflexiones,
              vivencias y poemas que nacen del caos y la calma.
            </p>
          </div>

          <motion.div
            className="flex-1 flex bg-rd-400 justify-center rounded-2xl p-1 bg-re400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-76 h-76 bg-red0 bg-white/10 backdrop-blur-md p-3 rounded-2xl">
              {/* <img src={ME} alt="Vicky" className="w-full h-full object-cover rounded-2xl" /> */}
              <Image
                src={ME}
                alt="Vicky"
                className="w-full h-full object-cover rounded-2xl"
                width={500} // poné el tamaño real de la imagen
                height={500}
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
            onClick={() => {
              router.push("/inicio");
            }}
            className="-mt-10 flex  items-center gap-4 bg-white/10 backdrop-blur-md py-2 px-4 rounded-2xl cursor-pointer "
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
          <p className="text-black font-bold">© 2025 Fredes Virginia - Todos los derechos reservados</p>
        </motion.div>
      </div>
    </div>
  );
}
