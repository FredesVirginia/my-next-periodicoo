import Image from "next/image";
import FONDO from "../public/assets/img/fondo24.jpg";
import { motion } from "framer-motion";
import ShinyText from "@/components/animation/button";
import { Lightning } from "@/components/animation/rayos";
import { useRouter } from "next/router";
import { useState } from "react";
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
  style={{ width: '100%', height: '600px', position: 'relative' }}
  className="opacity-0 transition-opacity duration-1000 ease-out"
  onAnimationEnd={(e) => {
    e.currentTarget.classList.remove('opacity-0');
    e.currentTarget.classList.add('opacity-100');
  }}
>
  <Lightning
    hue={220}
    xOffset={0}
    speed={1}
    intensity={1}
    size={1}
  />
</div>


    );
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Fondo */}
      <Image
        src={FONDO}
        alt="Fondo"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Contenido principal animado */}
      <motion.div
        className="relative z-10 flex flex-col min-h-screen text-white justify-center items-center px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-4">📰 Mi Periódico Digital</h1>
        <p className="text-lg mb-6">Con Next.js + Tailwind</p>

        <button
          onClick={() => handleClick()}
          className="bg-green-900 py-3 px-8 rounded-2xl font-bold cursor-pointer"
        >
          <ShinyText
            text="Just some shiny text!"
            disabled={false}
            speed={1}
            className="custom-class"
          />
        </button>
      </motion.div>
    </div>
  );
}
