import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function CreateFirtPlantilla() {
  const validationSchema = Yup.object({
    titulo: Yup.string().required("Campo requerido"),
    subtitulo1: Yup.string().required("Este campo es obligatorio"),
    texto1: Yup.string().required("Este campo es obligatorio"),
    subtitulo2: Yup.string().required("Este campo es obligatorio"),
    texto2: Yup.string().required("Este campo es obligatorio"),
    subtitulo3: Yup.string().required("Este campo es obligatorio"),
    texto3: Yup.string().required("Este campo es obligatorio"),
    subtitulo4: Yup.string().required("Este campo es obligatorio"),
    texto4: Yup.string().required("Este campo es obligatorio"),
  });
  return (
    <Formik
      initialValues={{
        titulo: "",
        subtitulo1: "",
        texto1: "",
        subtitulo2: "",
        texto2: "",
        subtitulo3: "",
        texto3: "",
        subtitulo4: "",
        texto4: "",
      }}
      validationSchema={validationSchema}
      validateOnMount={true} // Importante para que el botón esté deshabilitado al inicio
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
      
          <Form className="flex flex-col gap-8 max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-lg">
  {/* Título */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
    <label htmlFor="titulo" className="block text-gray-800 font-semibold mb-3">
      Título
    </label>
    <Field
      as="textarea"
      id="titulo"
      name="titulo"
      rows={2}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.titulo && errors.titulo ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el título"
    />
    {touched.titulo && errors.titulo && (
      <p className="text-red-500 text-sm mt-2">{errors.titulo}</p>
    )}
  </div>

  {/* Sección 1 */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
    <label htmlFor="subtitulo1" className="block text-gray-800 font-semibold mb-2">
      Subtítulo 1
    </label>
    <Field
      as="textarea"
      id="subtitulo1"
      name="subtitulo1"
      rows={2}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.subtitulo1 && errors.subtitulo1 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el subtítulo 1"
    />
    {touched.subtitulo1 && errors.subtitulo1 && (
      <p className="text-red-500 text-sm mt-2">{errors.subtitulo1}</p>
    )}

    <label htmlFor="texto1" className="block text-gray-800 font-semibold mt-6 mb-2">
      Texto 1
    </label>
    <Field
      as="textarea"
      id="texto1"
      name="texto1"
      rows={4}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.texto1 && errors.texto1 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el texto 1"
    />
    {touched.texto1 && errors.texto1 && (
      <p className="text-red-500 text-sm mt-2">{errors.texto1}</p>
    )}
  </div>

  {/* Sección 2 */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
    <label htmlFor="subtitulo2" className="block text-gray-800 font-semibold mb-2">
      Subtítulo 2
    </label>
    <Field
      as="textarea"
      id="subtitulo2"
      name="subtitulo2"
      rows={2}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.subtitulo2 && errors.subtitulo2 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el subtítulo 2"
    />
    {touched.subtitulo2 && errors.subtitulo2 && (
      <p className="text-red-500 text-sm mt-2">{errors.subtitulo2}</p>
    )}

    <label htmlFor="texto2" className="block text-gray-800 font-semibold mt-6 mb-2">
      Texto 2
    </label>
    <Field
      as="textarea"
      id="texto2"
      name="texto2"
      rows={4}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.texto2 && errors.texto2 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el texto 2"
    />
    {touched.texto2 && errors.texto2 && (
      <p className="text-red-500 text-sm mt-2">{errors.texto2}</p>
    )}
  </div>

  {/* Sección 3 */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
    <label htmlFor="subtitulo3" className="block text-gray-800 font-semibold mb-2">
      Subtítulo 3
    </label>
    <Field
      as="textarea"
      id="subtitulo3"
      name="subtitulo3"
      rows={2}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.subtitulo3 && errors.subtitulo3 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el subtítulo 3"
    />
    {touched.subtitulo3 && errors.subtitulo3 && (
      <p className="text-red-500 text-sm mt-2">{errors.subtitulo3}</p>
    )}

    <label htmlFor="texto3" className="block text-gray-800 font-semibold mt-6 mb-2">
      Texto 3
    </label>
    <Field
      as="textarea"
      id="texto3"
      name="texto3"
      rows={4}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.texto3 && errors.texto3 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el texto 3"
    />
    {touched.texto3 && errors.texto3 && (
      <p className="text-red-500 text-sm mt-2">{errors.texto3}</p>
    )}
  </div>

  {/* Sección 4 */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
    <label htmlFor="subtitulo4" className="block text-gray-800 font-semibold mb-2">
      Subtítulo 4
    </label>
    <Field
      as="textarea"
      id="subtitulo4"
      name="subtitulo4"
      rows={2}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.subtitulo4 && errors.subtitulo4 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el subtítulo 4"
    />
    {touched.subtitulo4 && errors.subtitulo4 && (
      <p className="text-red-500 text-sm mt-2">{errors.subtitulo4}</p>
    )}

    <label htmlFor="texto4" className="block text-gray-800 font-semibold mt-6 mb-2">
      Texto 4
    </label>
    <Field
      as="textarea"
      id="texto4"
      name="texto4"
      rows={4}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
        touched.texto4 && errors.texto4 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
      placeholder="Ingrese el texto 4"
    />
    {touched.texto4 && errors.texto4 && (
      <p className="text-red-500 text-sm mt-2">{errors.texto4}</p>
    )}
  </div>

  {/* Botón enviar */}
  <button
    type="submit"
    disabled={!isValid || !dirty || isSubmitting}
    className={`mt-6 py-3 rounded-lg font-semibold text-white transition ${
      !isValid || !dirty || isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-amber-500 hover:bg-amber-600 shadow-lg"
    }`}
  >
    Enviar
  </button>
</Form>

      )}
    </Formik>
  );
}
