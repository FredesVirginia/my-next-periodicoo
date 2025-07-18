import Layout from "@/components/layouts/Layout";
import React from "react";
import PRIMERO from "../public/assets/img/1.png";
import PRIMERO2 from "../public/assets/img/2.png";
import PRIMERO3 from "../public/assets/img/3.png";
import PRIMERO4 from "../public/assets/img/4.png";
import PRIMERO5 from "../public/assets/img/5.png";
import PRIMERO6 from "../public/assets/img/6.png";

import PRIMERO8 from "../public/assets/img/7.png";
import PRIMERO9 from "../public/assets/img/8.png";
import PRIMERO10 from "../public/assets/img/9.png";
import PRIMERO11 from "../public/assets/img/10.png";
import PRIMERO12 from "../public/assets/img/11.png";
import PRIMERO13 from "../public/assets/img/12.png";
import PRIMERO14 from "../public/assets/img/13.png";
import PRIMERO15 from "../public/assets/img/14.png";
import PRIMERO16 from "../public/assets/img/15.png";
import PRIMERO17 from "../public/assets/img/16.png";
import Image from "next/image";

export default function About() {
  const images = [
    PRIMERO,
    PRIMERO2,
    PRIMERO3,
    PRIMERO4,
    PRIMERO5,
    PRIMERO6,
    PRIMERO8,
    PRIMERO9,
    PRIMERO10,
    PRIMERO11,
    PRIMERO12,
    PRIMERO13,
    PRIMERO14,
    PRIMERO15,
    PRIMERO16,
    PRIMERO17,
  ];

  const rows = 8;
  const imagesPerRow = Math.ceil(images.length / rows);

  const groupedImages = Array.from({ length: rows }, (_, i) => images.slice(i * imagesPerRow, (i + 1) * imagesPerRow));
  return (
    <Layout>
      <div className="bg-ed-700 mx-32 flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Sobre Mí</h1>
        <p className="text-[17px] text-gray-600">
          Soy una desarrolladora web 🤖 apasionada por la automatización de procesos y la eliminación de tareas repetitivas 👨‍💻,
          así como por la creación de soluciones escalables y a medida. Mi enfoque se centra en escribir código limpio y
          mantenible, siguiendo las mejores prácticas y metodologías ágiles.
        </p>

        <h2 className="text-3xl font-bold mt-5">Lo que me inspira</h2>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            margin: "1rem 0",
          }}
          className="lista text-[18px] text-gray-600"
        >
          <li>
            🌱 Estoy enfocado en evolucionar continuamente, buscando el crecimiento tanto en lo personal como en lo profesional.
          </li>
          <li>⏳ Me motiva descubrir herramientas de desarrollo personal y productividad que me acerquen a mi mejor versión.</li>
          <li>🤝 Valoro el trabajo en equipo y disfruto colaborar con personas apasionadas por la tecnología.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-5">Tecnologias ⚙️</h2>
        <div className="grid grid-cols-8 gap-4 my-5">
          {images.map((img, idx) => (
            <Image key={idx} src={img} alt={`Imagen ${idx}`} width={80} height={80} className="rounded-lg object-cover" />
          ))}
        </div>
        <h2 className="text-3xl font-bold">Mi Objetivo 🎯</h2>
        <p className="text-[17px] text-gray-600">
          Desde este blog quiero aportar valor compartiendo conocimientos sobre desarrollo web y tendencias digitales. Encontrarás
          contenido técnico, reflexiones y consejos prácticos para tu crecimiento como desarrollador. ¡Acompañame en esta travesía
          hacia un futuro lleno de innovación! 🚀
        </p>
      </div>
    </Layout>
  );
}
