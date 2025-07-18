import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PERFIL from "../../public/assets/img/me10.png";
import Link from "next/link";
export default function Intro() {
  return (
    <div className=" bg-gray-200 md:px-41 px-58  -mt-5 pb-8 ">
      <div className="flex justify-between mx-14 gap-30 bg-bue-500 items-center">
        <div className="bg-rd-700">
          <p className="text-gray-600 text-3xl font-bold">Virginia Belen Fredes</p>
          <p className=" bg-orage-300 text-gray-700  text-xl text-left">
            Bienvenido a mi blog, el <span className="text-red-800">rincón 🍂 </span> donde Sherlock Holmes tomaría mate y
            <span className="text-red-800"> escribiría ✍️ </span> en React.
          </p>
          <div className="bg-gray-200 flex items-center gap-5 mt-8">
            <a href="https://www.linkedin.com/in/fredes-virginia-37889511b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} fill="gray" />
            </a>
            <a href="https://github.com/FredesVirginia" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} fill="gray" />
            </a>
            <a href="https://www.instagram.com/jonh_clein_dev/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} fill="gray" />
            </a>
          </div>
        </div>

        <div className=" w-36  -translate-x-2 rounded-2xl shadow-2xl">
          <Image src={PERFIL} alt="Fondo" priority className="w-full h-full  rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
