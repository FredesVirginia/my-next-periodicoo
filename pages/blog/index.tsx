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
import ME from "../../public/assets/img/me.png";
import { div } from "framer-motion/client";
import { FaSnowboarding } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { Main } from "next/document";
import Layout from "@/components/layouts/Layout";

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
        MAIN
      </div>
     </Layout>

  );
}
