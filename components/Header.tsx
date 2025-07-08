import React from "react";
import Image from "next/image";
import FONDO from "../public/assets/img/fondo25.jpg";
import { motion } from "framer-motion";
const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Header() {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center pt-10"
    >
      <motion.h1
        variants={itemVariants}
        className="h1-blog text-8xl"
      >
        Bolas de algodon
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-gray-400"
      >
        MULTIPUPOSE MAGACZIINE AND BLOG THEME
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="border-y-2 mt-5 font-bold flex border-gray-300 justify-center gap-30 py-10 w-full max-w-4xl"
      >
        <p  className="cursor-pointer hover:text-blue-500 transition-colors">INICIO</p>
        <p className="cursor-pointer hover:text-blue-500 transition-colors">TEGNOLOGIA</p>
        <p className="cursor-pointer hover:text-blue-500 transition-colors">PERSONAL</p>
      </motion.div>
    </motion.div>
  );
}
