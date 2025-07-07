import Image from "next/image";
import FONDO from "../public/assets/img/fondo24.jpg";
import Header from "@/components/Header";

import Link from "next/link";
import ShinyText from "@/components/animation/button";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Fondo */}
      <Image
        src={FONDO}
        alt="Fondo"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

 

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col min-h-screen text-white justify-center items-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">📰 Mi Periódico Digital</h1>
        <p className="text-lg mb-6">Con Next.js + Tailwind</p>
        <Link href="/blog">
          <button className="bg-green-900 py-3 px-8 rounded-2xl font-bold cursor-pointer ">
           <ShinyText text="Just some shiny text!" disabled={false} speed={1} className='custom-class' />
          </button>
        </Link>
        
      </div>
    </div>

  );
}
