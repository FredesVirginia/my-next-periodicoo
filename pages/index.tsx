import Image from "next/image";
import FONDO from "../public/assets/img/fondo24.jpg";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={FONDO}
        alt="Fondo"
        layout="fill" // Hace que la imagen llene el contenedor padre
        style={{ objectFit: "cover" }} // Equivalente a object-cover en CSS
        priority // Opcional, para cargar rápido la imagen de fondo
      />
      {/* Aquí puedes poner contenido encima de la imagen */}
      <div className="relative z-10  ">
       
        <div className="flex flex-col  min-h-screen text-white justify-center items-center">
          <h1 className="text-4xl font-bold ">📰 Mi Periódico Digital</h1>
          <p className="text-lg mt-4">Con Next.js + Tailwind</p>
        </div>
      </div>
    </div>
  );
}
