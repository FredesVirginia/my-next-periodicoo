import { Field, FieldArray, Form, Formik } from "formik";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Yup from "yup";
import FONDO from "../../../public/assets/img/fondo16.jpg";
import { useHookCreatedBlog } from "@/hooks/createBlog/useHookCreateBlog";
import { IReqCreatedBlog } from "@/hooks/createBlog/IReqCreateBlog";
import { limpiarSecciones } from "@/utils/utils";
enum TypeBloque {
  TEXTO = "TEXTO",
  LISTA = "LISTA",
}
type bloques = {
  tipo: TypeBloque;
  contenido: string;
};
type secciones = {
  subtitulo: string;
  bloques: bloques[];
};
export interface IPropsForm {
  titulo: string;
  resumen: string;
  secciones: secciones[];
}
export default function CreatedSecondPlantilla() {
  const { mutationCreateBlog } = useHookCreatedBlog();

  const validationSchema = Yup.object({
  titulo: Yup.string().required("Este campo es obligatorio"),
  resumen: Yup.string().required("Este campo es obligatorio"),
  secciones: Yup.array()
    .of(
      Yup.object({
        subtitulo: Yup.string().required("Este campo es obligatorio"),
        bloques: Yup.array()
          .of(
            Yup.object({
              tipo: Yup.string()
                .oneOf(["TEXTO", "LISTA"])
                .required("El tipo de bloque es obligatorio"),
              contenido: Yup.string().required("El contenido es obligatorio"),
            })
          )
          .min(1, "Agrega al menos un bloque"),
      })
    )
    .min(1, "Agrega al menos una sección"),
});


  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClick = (values: IPropsForm) => {
    console.log("DATA 2 ", values);
    const seccionesLimpias = limpiarSecciones(values.secciones);
    const data: IReqCreatedBlog = {
      autor: "Jonh Clein",
      category: "PLANTILLA_1",
      titulo: values.titulo.trim(),
      imagen1: "https://static.diariofemenino.com/uploads/psicologia/217225-sonar-gato.jpg",
      imagen2: "https://static.diariofemenino.com/uploads/psicologia/217225-sonar-gato.jpg",
      resumen: values.resumen.trim(),
      secciones: seccionesLimpias
    };

   mutationCreateBlog.mutate(data);
  };
  return (
    <div className="relative">
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Image src={FONDO} alt={"hjhj"} fill style={{ objectFit: "cover" }} className="" priority />
      </div>

      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="bg-white/30 m-auto translate-y-8  rounded-2xl w-[50rem] shadow-lg"
      >
        <Formik
          initialValues={{
            titulo: "",
            resumen: "",
            secciones: [
              {
                subtitulo: "",
                bloques: [
                  {
                    tipo: TypeBloque.TEXTO,
                    contenido: "",
                  },
                ],
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleClick(values);
            resetForm();
          }}
        >
          {({ values, setFieldValue, errors, touched, isValid, dirty, isSubmitting }) => (
            <Form className="flex flex-col gap-6 max-w-xl mx-auto px-6 py-10">
              <h1 className="text-4xl text-center font-bold text-white mb-4">Crear Artículo</h1>

              {/* Título */}
              <div>
                <Field
                  as="textarea"
                  id="titulo"
                  name="titulo"
                  rows={2}
                  className={`w-full px-4 py-3 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                    touched.titulo && errors.titulo ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                  }`}
                  placeholder="Ingrese el título"
                />
                {touched.titulo && errors.titulo && <p className="text-red-500 font-bold text-sm mt-2">{errors.titulo}</p>}
              </div>

              {/* Resumen */}
              <div>
                <Field name="resumen">
                  {({ field, meta }: any) => {
                    const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                    return (
                      <div className="relative">
                        <textarea
                          {...field}
                          rows={4}
                          className={`w-full px-4 py-3 bg-gray-100 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                            meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                          }`}
                          placeholder="Ingrese resumen"
                        />
                        <div className="text-sm text-right pr-2 text-white">{wordCount} / 34 palabras</div>
                        {meta.touched && meta.error && <p className="text-red-500 font-bold  text-sm mt-2">{meta.error}</p>}
                      </div>
                    );
                  }}
                </Field>
              </div>

              {/* Secciones dinámicas */}
              <FieldArray name="secciones">
                {({ push: pushSection, remove: removeSection }) => (
                  <>
                    {values.secciones.map((seccion, secIdx) => (
                      <motion.div
                        key={secIdx}
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.4, delay: secIdx * 0.1 }}
                        className="bg-white p-5 rounded-xl shadow mb-8"
                      >
                        {/* Subtítulo de la sección */}
                        <label className="block font-semibold mb-2 text-gray-700">Contenido de la  Sección {secIdx + 1}</label>
                        <Field
                          name={`secciones[${secIdx}].subtitulo`}
                          placeholder="Introduce el subtítulo"
                          className="w-full border border-gray-300 rounded p-2 mb-4"
                        />
                        {/* Bloques dentro de la sección */}
                        <FieldArray name={`secciones[${secIdx}].bloques`}>
                          {({ push: pushBloque, remove: removeBloque }) => (
                            <>
                              {seccion.bloques.map((bloque, bloqueIdx) => (
                                <div key={bloqueIdx} className="mb-4">
                                  {/* Selector tipo de bloque */}
                                  <div className="flex  justify-between mb-2">
                                    {["TEXTO", "LISTA"].map((tipo) => (
                                      <button
                                        key={tipo}
                                        type="button"
                                        onClick={() => setFieldValue(`secciones[${secIdx}].bloques[${bloqueIdx}].tipo`, tipo)}
                                        className={`px-4 py-1 rounded cursor-pointer ${
                                          bloque.tipo === tipo ? "bg-sky-400 text-white" : "bg-gray-200 text-gray-700"
                                        }`}
                                      >
                                        {tipo}
                                      </button>
                                    ))}
                                    {/* Botón quitar bloque */}
                                    {seccion.bloques.length > 1 && (
                                      <button
                                        type="button"
                                        className="text-red-500 font ml-2 bg-red-100 px-2 rounded-xl cursor-pointer"
                                        onClick={() => removeBloque(bloqueIdx)}
                                      >
                                        Eliminar Bloque
                                      </button>
                                    )}
                                  </div>
                                  {/* Contenido del bloque */}
                                  <Field
                                    as="textarea"
                                    name={`secciones[${secIdx}].bloques[${bloqueIdx}].contenido`}
                                    placeholder={bloque.tipo === "LISTA" ? "Ítems separados por línea" : "Contenido del texto"}
                                    className="w-full border border-gray-300 rounded p-2 mb-2"
                                  />
                                </div>
                              ))}
                              {/* Agregar bloque */}
                              <button
                                type="button"
                                className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700 transition w-full"
                                onClick={() =>
                                  pushBloque({
                                    tipo: "TEXTO",
                                    contenido: "",
                                  })
                                }
                              >
                                + Agregar Bloque
                              </button>
                            </>
                          )}
                        </FieldArray>
                        {/* Eliminar sección */}
                        {values.secciones.length > 1 && (
                          <button type="button" onClick={() => removeSection(secIdx)} className="text-red-600 font-bold mt-3">
                            Eliminar sección
                          </button>
                        )}
                      </motion.div>
                    ))}
                    {/* Botón agregar sección */}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        pushSection({
                          subtitulo: "",
                          bloques: [
                            {
                              tipo: "TEXTO" as TypeBloque,
                              contenido: "",
                            },
                          ],
                        })
                      }
                      style={{backgroundColor : "#a55f28"}}
                      className=" text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-orange-100 transition"
                    >
                      + Nueva Sección
                    </motion.button>
                  </>
                )}
              </FieldArray>

              {/* Botón submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!isValid || !dirty || isSubmitting}
                className="bg-green-700 rounded-xl text-white font-bold py-2  shadow hover:bg-green-700 transition disabled:bg-gray-300 mt-4"
              >
                Enviar artículo
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}
