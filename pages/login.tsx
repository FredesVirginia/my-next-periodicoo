import Image from "next/image";
import FONDO1 from "../public/assets/img/fondo20.jpg";
import FONDO2 from "../public/assets/img/carita.png";
import { motion } from 'framer-motion';
export default function login() {
  return (
 <div className="relative">
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
          alt="Fondo"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Contenido encima de la imagen con animación */}
      <motion.div
        className="relative flex justify-center flex-col items-center z-10 text-white rounded-xl max-w-xl mx-auto top-14 h-[30rem] bg-white/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={FONDO2}
          alt="Foto redonda"
          width={200}
          height={200}
          className="mx-auto rounded-full object-cover aspect-square"
          priority
        />

        <p className="text-xl px-5 pt-5 text-black text-center">
          👋 ¡Ey Harry! Ya sabés que desde acá se mueven los hilos.
        </p>
        <p className="text-xl px-5 text-black text-center">
          🚀 ¡A darle con todo!
        </p>

      <motion.button
  className="bg-orange-500 cursor-pointer mt-5 px-10 text-xl py-2 rounded-xl"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{  duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.05, backgroundColor: '#f97316' }} // color más claro al pasar
  whileTap={{ scale: 0.95 }}
>
  Vamos
</motion.button>
      </motion.div>
    </div>
  );
}
