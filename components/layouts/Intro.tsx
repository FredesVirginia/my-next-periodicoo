import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PERFIL from "../../public/assets/img/me10.png";
export default function Intro() {
  return (
   <div className="bg-gray-200 md:px-54     -mt-5 pb-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
    
    {/* Texto e iconos */}
    <div className="text-center md:text-left">
      <p className="text-gray-600 text-2xl md:text-3xl font-bold">
        Virginia Belen Fredes
      </p>
      <p className="text-gray-700 text-base md:text-xl mt-2">
        Bienvenido a mi blog, el <span className="text-red-800">rincón 🍂 </span> donde Sherlock Holmes tomaría mate y
        <span className="text-red-800"> escribiría ✍️ </span> en React.
      </p>
      
      {/* Íconos redes */}
      <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
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

    {/* Imagen */}
    <div className="w-32 md:w-36 rounded-2xl shadow-2xl overflow-hidden">
      <Image
        src={PERFIL}
        alt="Fondo"
        priority
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </div>
</div>

  );
}
