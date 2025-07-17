import React from 'react'
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PERFIL from "../../public/assets/img/me2.png"
import Link from 'next/link';
export default function Intro() {
  return (
    <div className=' bg-gray-200 px-27  py-10 '>
       
       <div className='flex justify-between mx-14 gap-30 bg-bue-500 items-center'>
        <div className='bg-rd-700'>
            <p className='text-gray-600 font-bold'>Virginia Belen Fredes</p>
         <p className=" bg-orage-300 text-gray-700 w-96 text-left">
          Bienvenido a mi blog, el <span className="text-red-800">rincón 🍂 </span> donde
          Sherlock Holmes tomaría mate y
          <span className="text-red-800"> escribiría ✍️ </span> en React.
        </p>
        <div className='bg-gray-200 flex items-center gap-5 mt-5'>
            <Link href={""}><FaLinkedin size={25} fill='gray'/> </Link>
            <Link href={""}> <FaGithub size={25} fill='gray'/></Link>
            <Link href={""}> <FaInstagram size={25} fill='gray'/> </Link>
        </div>
        </div>

         <div className=" w-30 p-2 bg-gray-100 -translate-x-5 rounded-2xl shadow-2xl">
            <Image
              src={PERFIL}
              alt="Fondo"
              priority
              className="w-full rounded-2xl"
            />
          </div>
       </div>
    </div>
  )
}
