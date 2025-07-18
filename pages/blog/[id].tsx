import { useRouter } from "next/router";

import Layout from "@/components/layouts/Layout";
import { useBlogId } from "@/hooks/blogs/useHookBlog";
import Image from "next/image";
import ME  from "../../public/assets/img/yoooooooooooooo.png"
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
      <article className="max-w-7xl md:mx-8 mx-30  rounded-xl shadow-lg p-6 my-10">
        {/* Título */}

        {/* Imagen principal */}
        <img
          src={data.imagen1}
          alt={"ww"}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        {/* Resumen */}
        <h1
          style={{ fontFamily: "" }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-600"
        >
          {data.titulo}
        </h1>
        <div className="flex items-center justify-center gap-15 mt-6 mb-7">
          <div className="flex items-center gap-2">
             <Image
             width={25}
             height={25}
          src={ME}
          alt={"ww"}
          className=" rounded-full object-cover  "
        />
         <p className="text-gray-500 font-bold">Virginia Belen Fredes</p>
          </div>
         
          <p className=" text-gray-600 text-sm">
            📅
            {new Date(data.fechaPublicacion).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <p className="text-lg text-gray-700 mb-8 whitespace-pre-line">
          {data.resumen}
        </p>

        {/* Secciones */}
        {data.seccionesTexto.map((seccion) => (
          <section key={seccion.id} className="mb-10">
            {/* Subtítulo */}
            <h2 className="text-2xl font-bold text- mb-5">
              {seccion.subtitulo}
            </h2>

            {/* Bloques de la sección */}
            {seccion.bloques.map((bloque) => {
              // --- Renderizado para tipo TEXTO ---
              if (bloque.tipo === "TEXTO") {
                return (
                  <p
                    key={bloque.id}
                    className="text-gray-600 text-xl mb-4 whitespace-pre-line"
                  >
                    {bloque.contenido}
                  </p>
                );
              }
              // --- Renderizado para tipo LISTA ---
              if (bloque.tipo === "LISTA") {
                const partes = [];
                let texto = bloque.contenido;

                // Extraer el texto entre { }, si existe
                const h3Match = texto.match(/\{([^}]*)\}/);
                if (h3Match) {
                  partes.push(
                    <h3
                      key="lista-h3"
                      className="text-lg font-semibold mb-2 text-blue-700"
                    >
                      {h3Match[1].trim()}
                    </h3>
                  );
                  texto = texto.replace(h3Match[0], "");
                }

                // Extraer el texto entre [ ], si existe
                const bracketMatch = texto.match(/\[([^[\]]*)\]/);
                let bracketText = "";
                if (bracketMatch) {
                  bracketText = bracketMatch[1].trim();
                  texto = texto.replace(bracketMatch[0], "");
                }

                // Queda el texto de lista, quitar puntos dobles y excesos de espacios
                // Dividir los items de la lista por puntos: detecta punto, seguido por espacio y mayúscula o número o símbolo
                const items = texto
                  .split(/\.\s+(?=[A-Z0-9{[])/g)
                  .map((v) => v.trim())
                  .filter((v) => v.length > 0);

                return (
                  <div key={bloque.id} className="mb-6">
                    {/* Render h3 si hay */}
                    {partes}
                    {/* Render lista si hay items */}
                    {items.length > 0 && (
                      <ol className="list-decimal lista ml-6 text-xl text-gray-600 space-y-1 mb-2">
                        {items.map((item, idx) => (
                          <li key={idx}>
                            {item.replace(/^[\-\•]+/, "").trim()}
                          </li>
                        ))}
                      </ol>
                    )}
                    {/* Render texto entre [] si hay */}
                    {bracketText && (
                      <p className="py-5 text-base text-gray-700 mt-2  whitespace-pre-line">
                        {bracketText}
                      </p>
                    )}
                  </div>
                );
              }

              // Render por defecto si tipo desconocido
              return null;
            })}
          </section>
        ))}
      </article>
    </Layout>
  );
}
