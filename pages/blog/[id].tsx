import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";
import { useBlogId } from "@/hooks/blogs/useHookBlog";
import Image from "next/image";
import ME from "../../public/assets/img/yoooooooooooooo.png";
export default function BlogDetalle() {
  const router = useRouter();
  const { id } = router.query;
  //const [dataBlog , setDataBlog] = useState<IPropsBlog>()
  const { data } = useBlogId(id as string);
  console.log("LA DATA ES ", data);

  if (!data) {
    return <p className="text-center mt-20">Cargando artículo...</p>;
  }

  return (
    <Layout>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 rounded-xl shadow-lg">
        {/* Imagen principal */}
        {/* <img
    src={data.imagen1}
    alt="Imagen principal"
    className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
  /> */}

        <Image
          src={data.imagen1}
          alt="Imagen principal"
          width={1200} // podés ajustarlo
          height={320} // ajustalo según el diseño
          className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
          style={{ objectFit: "cover" }}
        />

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-700">{data.titulo}</h1>

        {/* Autor y fecha */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-10 mt-6 mb-7">
          <div className="flex items-center gap-3">
            <Image width={32} height={32} src={ME} alt="Autor" className="rounded-full object-cover" />
            <p className="text-gray-600 font-medium">Virginia Belen Fredes</p>
          </div>
          <p className="text-gray-500 text-sm">
            📅{" "}
            {new Date(data.fechaPublicacion).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Resumen */}
        <p className="text-base sm:text-lg text-gray-700 mb-8 whitespace-pre-line">{data.resumen}</p>

        {/* Secciones dinámicas */}
        {data.seccionesTexto.map((seccion) => (
          <section key={seccion.id} className="mb-10">
            {/* Subtítulo */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{seccion.subtitulo}</h2>

            {/* Bloques */}
            {seccion.bloques.map((bloque) => {
              if (bloque.tipo === "TEXTO") {
                return (
                  <p key={bloque.id} className="text-base sm:text-lg text-gray-700 mb-4 whitespace-pre-line">
                    {bloque.contenido}
                  </p>
                );
              }

              if (bloque.tipo === "LISTA") {
                const partes = [];
                let texto = bloque.contenido;

                const h3Match = texto.match(/\{([^}]*)\}/);
                if (h3Match) {
                  partes.push(
                    <h3 key="lista-h3" className="text-base sm:text-lg font-semibold mb-2 text-blue-700">
                      {h3Match[1].trim()}
                    </h3>
                  );
                  texto = texto.replace(h3Match[0], "");
                }

                const bracketMatch = texto.match(/\[([^[\]]*)\]/);
                let bracketText = "";
                if (bracketMatch) {
                  bracketText = bracketMatch[1].trim();
                  texto = texto.replace(bracketMatch[0], "");
                }

                const items = texto
                  .split(/\.\s+(?=[A-Z0-9{[])/g)
                  .map((v) => v.trim())
                  .filter((v) => v.length > 0);

                return (
                  <div key={bloque.id} className="mb-6">
                    {partes}
                    {items.length > 0 && (
                      <ol className="list-decimal lista ml-5 sm:ml-6 text-base sm:text-lg text-gray-600 space-y-1 mb-2">
                        {items.map((item, idx) => (
                          <li key={idx}>{item.replace(/^[\-\•]+/, "").trim()}</li>
                        ))}
                      </ol>
                    )}
                    {bracketText && <p className="pt-3 text-sm sm:text-base text-gray-700 whitespace-pre-line">{bracketText}</p>}
                  </div>
                );
              }

              return null;
            })}
          </section>
        ))}
      </article>
    </Layout>
  );
}
