import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FONDO from "../../public/assets/img/fondo71.jpg";
import { useBlog } from "@/hooks/blogs/useHookBlog";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { PropagateLoader } from "react-spinners";
import { useRouter } from "next/router";
import PERFIL from "../../public/assets/img/yoooooooooooooo.png";
import ME from "../../public/assets/img/me.png"
import { div } from "framer-motion/client";
import { FaSnowboarding } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function index() {
  const { data } = useBlog();
  const router = useRouter();
  const [loading, setLoing] = useState(false);

  const handleClick = (id: string) => {
    setLoing(true);
    // Simula un delay para mostrar el loader antes de navegar
    setTimeout(() => {
      router.push(`/blog/${id}`);
    }, 500); // 0.5 segundos, ajusta según necesites
  };

  if (loading) {
    return (
      <div className="fixed inset-0  flex justify-center items-center py-5">
        <PropagateLoader color="#ca5d36" />
      </div>
    );
  }

  return (
    <div className="bg-gray-300  w-min-full  pt-10 rounded-2xl">
      <div className="flex  justify-between mx-36 pt-10 bg-gray-200 px-10 rounded-2xl">
        <div className="h1-description bg-re-400">
          <h2 className="text-sky-900">Bolas de Algodon</h2>
        </div>
        <div className="bg-ed-700 flex  gap-20  ">
          <div>
            <p className="font-bold text-gray-700">Desarrollo Web</p>
          </div>
          <div>   <p className="font-bold text-gray-700">Mamarachismo Ilustrado</p></div>
          <div className=" w-10  rounded-2xl -translate-y-3">
            <Image
              src={PERFIL}
              alt="Fondo"
              priority
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200  mx-36 mt-5  flex flex-col justify-center items-center py-8 rounded-2xl">
      
        <p className="text-center font-bold text-gray-700">
          Bienvenido al <span className="text-red-800">rincón 🍂 </span> donde
          Sherlock Holmes tomaría mate y{" "}
          <span className="text-red-800">escribiría ✍️</span> en React.
        </p>
      </div>

      <div className=" mx-36  mt-5 flex justify-between bg-gray-200 p-5 rounded-2xl ">
        <div className="flex-1">
          <div className="h-86 w-86 rounded-2xl  px-1">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
              className="h-full w-full object-cover rounded-2xl"
              alt="logo"
            />
          </div>
        </div>

        <div className=" flex-1">
          <div className="flex mx-10 mt-2  gap-5  items-center">
            <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
            <p className="text-gray-800">Articulo Bolas De Algodon</p>
          </div>
          <p className="mx-10 mt-4 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisi
          </p>
          <p className="mx-10 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            nostrum provident nobis, necessitatibus vero a, in fugiat omnis
            similique dicta nesciunt placeat sit aperiam blanditiis saepe vitae
            quod est nulla.
          </p>
          <p className="mx-10 text-gray-700">
            {" "}
            <span className="text-red-900 font-bold fo">Movie</span> Read
          </p>
        </div>
      </div>

      <div>
          <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Artículos</h2>
            <div className="max-w-7xl mx-auto p-6">
              {!data ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-gray-500 text-lg">Cargando artículos...</p>
                </div>
              ) : data.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-gray-500 text-lg">No hay artículos disponibles.</p>
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {data.map((article, index) => {
                   

                    return (
                      <motion.div
                        onClick={() => handleClick(article.id)}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={article.imagen1}
                            alt={`Imagen `}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-t-lg"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.titulo}</h3>
                          <p className="text-gray-600 mb-4">{article.resumen}</p>
                          <p className="text-sm text-gray-500 italic">Autor: {article.autor}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>
        </div>

           <div className="flex  bg-red-900     mt-5 justify-between px-46 py-5 items-center gap-20">
        <div className="text-white"><p>Lo importante no es saber, es deducir. Y si no, improvisar con estilo.</p></div>
        <div className="w-36 h-36 boder">
         
            <Image
              src={ME}
              alt="Fondo"
              priority
             className="w-full h-full object-contain rounded-full"
            />
        </div>
      </div>
    </div>
  );
}
