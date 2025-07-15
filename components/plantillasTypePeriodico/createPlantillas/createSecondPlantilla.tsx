import { Field, FieldArray, Form, Formik } from "formik";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Yup from "yup";
import FONDO from "../../../public/assets/img/fondo16.jpg";
export default function CreatedSecondPlantilla() {
  const validationSchema = Yup.object({
    titulo: Yup.string().required("Este campo es obligatorio"),
    resumen: Yup.string().required("Este campo es obligatorio"),
    secciones: Yup.array().of(
      Yup.object().shape({
        tipo: Yup.string().oneOf(["TEXTO", "LISTA"]).required(),
        contenido: Yup.string().required("Este campo es requerido"),
      })
    ),
  });

  const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
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
        <Image
          src={FONDO}
          alt={"hjhj"}
          fill
          style={{ objectFit: "cover" }}
          className=""
          priority
        />
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
              tipo: "TEXTO",
              contenido: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({
          values,
          setFieldValue,
          errors,
          touched,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form className="flex flex-col gap-6 max-w-xl mx-auto px-6 py-10">
            <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">
              Crear Artículo
            </h1>

            {/* Título */}
            <div>
             
              <Field
                as="textarea"
                id="titulo"
                name="titulo"
                rows={2}
                className={`w-full px-4 py-3 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                  touched.titulo && errors.titulo
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300"
                }`}
                placeholder="Ingrese el título"
              />
              {touched.titulo && errors.titulo && (
                <p className="text-red-500 font-bold text-sm mt-2">{errors.titulo}</p>
              )}
            </div>

            {/* Resumen */}
            <div>
             
              <Field name="resumen">
                {({ field, meta }: any) => {
                  const wordCount =
                    field.value?.trim().split(/\s+/).filter(Boolean).length ||
                    0;
                  return (
                    <div className="relative">
                      <textarea
                        {...field}
                        rows={4}
                        className={`w-full px-4 py-3 bg-gray-100 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                          meta.touched && meta.error
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Ingrese resumen"
                      />
                      <div className="text-sm text-right pr-2 text-white">
                        {wordCount} / 34 palabras
                      </div>
                      {meta.touched && meta.error && (
                        <p className="text-red-500 font-bold  text-sm mt-2">
                          {meta.error}
                        </p>
                      )}
                    </div>
                  );
                }}
              </Field>
            </div>

            {/* Secciones dinámicas */}
            <FieldArray name="secciones">
              {({ push }) => (
                <>
                  {values.secciones.map((seccion, index) => (
                    <motion.div
                      key={index}
                      variants={sectionVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white p-5 rounded-xl shadow mb-8"
                    >
                      <label className="block font-semibold mb-2 text-gray-700">
                        Sección {index + 1}
                      </label>

                      {/* Botones tipo */}
                      <div className="flex justify-center  gap-6 mb-4">
                        {["TEXTO", "LISTA"].map((tipo) => (
                          <motion.button
                            key={tipo}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setFieldValue(`secciones[${index}].tipo`, tipo)
                            }
                            className={`px-6 py-2 rounded font-semibold transition ${
                              seccion.tipo === tipo
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {tipo}
                          </motion.button>
                        ))}
                      </div>

                      {/* Textarea */}
                      <Field
                        as="textarea"
                        name={`secciones[${index}].contenido`}
                        placeholder={
                          seccion.tipo === "LISTA"
                            ? "Escribe los ítems separados por línea"
                            : "Escribe el contenido del texto"
                        }
                        className={`w-full border rounded p-3 resize-y shadow-sm ${
                          touched.secciones?.[index]?.contenido &&
                          typeof errors.secciones?.[index] === "object" &&
                          errors.secciones?.[index]?.contenido
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {touched.secciones?.[index]?.contenido &&
                        typeof errors.secciones?.[index] === "object" &&
                        errors.secciones?.[index]?.contenido && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.secciones[index].contenido}
                          </p>
                        )}
                    </motion.div>
                  ))}

                  {/* Botón para agregar sección */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      push({
                        tipo: "TEXTO",
                        contenido: "",
                      })
                    }
                    className=" bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-purple-700 transition"
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
              className="bg-green-600 rounded-xl text-white font-bold py-2  shadow hover:bg-green-700 transition disabled:bg-gray-300 mt-4"
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
