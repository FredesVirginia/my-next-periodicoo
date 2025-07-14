import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import FirstPlantilla, { IPropsFirstPlantilla } from "@/components/plantillasTypePeriodico/FirstPlantilla";
import { ICategoryBlog } from "@/hooks/blogs/IResBlog";
import { useBlogId } from "@/hooks/blogs/useHookBlog";
import { useEffect, useState } from "react";

export interface IPropsBlog extends IPropsFirstPlantilla {
  
}
export default function BlogDetalle() {
  const router = useRouter();
  const { id } = router.query;
  const [dataBlog , setDataBlog] = useState<IPropsBlog>()
  const { data} = useBlogId(id as string);
  console.log("LA DATA ES " , data)
   useEffect(() => {
    if (data) {
      setDataBlog({
        primerTitulo: data.titulos.find((t) => t.nivel === 1)?.texto || "Sin título",
        imagen1: data.imagen1,
        imagen2: data.imagen2,
        segundoSubtitulo1: data.seccionesTexto[0].titulo[0].texto,
        texto1: data.seccionesTexto[0].contenido,
        segundoSubtitulo2: data.seccionesTexto[1].titulo[0].texto,
        texto2: data.seccionesTexto[1].contenido,
        segundoSubtitulo3: data.seccionesTexto[2].titulo[0].texto,
        texto3: data.seccionesTexto[2].contenido,
        segundoSubtitulo4: data.seccionesTexto[3].titulo[0].texto,
        texto4: data.seccionesTexto[3].contenido,
      });
    }
  }, [data]);

  if (!data) {
    return <p className="text-center mt-20">Cargando artículo...</p>;
  }


  return (
    <div>
    

     

     
      <Footer />
    </div>
  );
}
