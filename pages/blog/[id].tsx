import { useRouter } from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBlogId } from "@/hooks/blogs/useHookBlog";

export default function BlogDetalle() {
  const router = useRouter();
  const { id } = router.query;

  const { data, response } = useBlogId(id as string);

  if (!data) {
    return <p className="text-center mt-20">Cargando artículo...</p>;
  }

  const tituloNivel1 = data.titulos.find((t) => t.nivel === 1)?.texto || "Sin título";

  return (
    <div>
      <Header />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{tituloNivel1}</h1>
        <p className="text-sm text-gray-500 mb-4">Autor: {data.autor}</p>
        <img src={data.imagen1} alt="Imagen del artículo" className="w-full rounded mb-6" />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.resumen}</p>
      </div>

      <Footer />
    </div>
  );
}
