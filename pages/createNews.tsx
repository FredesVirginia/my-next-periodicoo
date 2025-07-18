import React, { useState } from "react";
import plantilla1 from "../public/assets/img/plantilla1.png";
import plantilla2 from "../public/assets/img/plantilla2.png";
import Image from "next/image";
import CreateFirtPlantilla from "@/components/plantillasTypePeriodico/createPlantillas/createFirtPlantilla";
import { useRouter } from "next/router";
import { DotLoader } from "react-spinners";
import CreatedSecondPlantilla from "@/components/plantillasTypePeriodico/createPlantillas/createSecondPlantilla";

export default function createNews() {
 
  const [modalOpen, setModalOpen] = useState(true);

  // const handleClick = (type: string) => {
  //   setLoing(true);
  //   setTimeout(() => {
  //     router.push(`//createBlog/${type}`);
  //   }, 900);
  // };

  // if (loading) {
  //   return (
  //     <div className="fixed inset-0  flex justify-center items-center py-5">
  //       <DotLoader color="#ca5d36" />
  //     </div>
  //   );
  // }
  return (
   <div>
    <CreatedSecondPlantilla/>
   </div>
  );
}
