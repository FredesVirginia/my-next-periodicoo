import Layout from "@/components/layouts/Layout";
import { useBlog } from "@/hooks/blogs/useHookBlog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";

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
    <Layout>
      <div>
        <div className="  ">
          <h2 className="text-3xl mt-5 font-b mb-8 text-center text-sky-900">Artículos</h2>
          <div className="max-w-6xl  b-red-400 ">
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
                className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {data.map((article, index) => {
                  return (
                    <motion.div
                      onClick={() => handleClick(article.id)}
                      className="bg-white rounded-lg shadow-lg   w-70 h-[26rem] overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 w-80">
                        <Image
                          src={article.imagen1}
                          alt={`Imagen `}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                          priority
                        />
                      </div>
                      <p className="px-4 pt-2 text-gray-600 text-sm">
                        {new Date(article.fechaPublicacion).toLocaleDateString("es-ES", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <div className="p-4">
                        <h3 className="text-base font-semibold mb-2 text-gray-800">{article.titulo}</h3>
                        <p
                          className="text-gray-600 text-sm line-clamp-3"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {article.resumen}
                        </p>

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
    </Layout>
  );
}
