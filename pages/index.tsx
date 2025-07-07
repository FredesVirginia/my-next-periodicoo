import Image from "next/image";
import FONDO from "../public/assets/img/fondo24.jpg";
import Header from "@/components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={FONDO}
        alt="Fondo"
        layout="fill" 
        style={{ objectFit: "cover" }} 
        priority 
      />
      
      <div className="relative z-10  ">
       
        <div className="flex flex-col  min-h-screen text-white justify-center items-center">
          <h1 className="text-4xl font-bold ">📰 Mi Periódico Digital</h1>
          <p className="text-lg mt-4">Con Next.js + Tailwind</p>
        <Link href="/blog">
              <button className="bg-gray-400  py-3 px-8 rounded-2xl mt-4 font-bold">Ir a otra página</button>

        </Link>
        </div>
      </div>
    </div>
  );
}
