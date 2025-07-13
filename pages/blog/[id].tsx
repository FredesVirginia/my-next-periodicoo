import { useRouter } from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBlogId } from "@/hooks/blogs/useHookBlog";
import FirstPlantilla, { IPropsFirstPlantilla } from "@/components/plantillasTypePeriodico/FirstPlantilla";
import { useEffect, useState } from "react";
import { ICategoryBlog } from "@/hooks/blogs/IResBlog";

export interface IPropsBlog extends IPropsFirstPlantilla {
  
}
export default function BlogDetalle() {
  const router = useRouter();
  const { id } = router.query;
  const [dataBlog , setDataBlog] = useState<IPropsBlog>()
  const { data, response } = useBlogId(id as string);
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

  const tituloNivel1 = data.titulos.find((t) => t.nivel === 1)?.texto || "Sin título";

  return (
    <div>
    

      {/* <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{tituloNivel1}</h1>
        <p className="text-sm text-gray-500 mb-4">Autor55: {data.autor}</p>
        <img src={data.imagen1} alt="Imagen del artículo" className="w-full rounded mb-6" />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.resumen}</p>
      </div> */} 

      
       { data.category === ICategoryBlog.PLANTILLA_1 ? (   <FirstPlantilla  primerTitulo={dataBlog?.primerTitulo!} imagen1={dataBlog?.imagen1!} imagen2={dataBlog?.imagen2!} segundoSubtitulo1={dataBlog?.segundoSubtitulo1!} texto1={dataBlog?.texto2!} segundoSubtitulo2={dataBlog?.segundoSubtitulo2!} texto2={dataBlog?.texto2!} 
    
      segundoSubtitulo3={dataBlog?.segundoSubtitulo2!} texto3={dataBlog?.texto2!}
      segundoSubtitulo4={dataBlog?.segundoSubtitulo2!} texto4={dataBlog?.texto2!}

      
      
      />  ) : (<h1>sEGUNDO</h1>)}
      <Footer />
    </div>
  );
}
