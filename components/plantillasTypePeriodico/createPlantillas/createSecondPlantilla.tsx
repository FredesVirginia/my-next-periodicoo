import React from "react";
import { Formik, Form, Field, ErrorMessage , FieldArray } from "formik";
import * as Yup from "yup";
export default function CreatedSecondPlantilla() {
  const validationSchema = Yup.object({
    textarea1: Yup.string().required("Este campo es obligatorio"),
    textarea2: Yup.string().required("Este campo es obligatorio"),
    secciones: Yup.array().of(
    Yup.object().shape({
      tipo: Yup.string().oneOf(["TEXTO", "LISTA"]).required(),
      contenido: Yup.string().required("Este campo es requerido"),
    })
  ),
  });
  return (
    <Formik
      initialValues={{
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
      {({ values, setFieldValue, errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className="flex flex-col gap-4 max-w-xl mx-auto">
          <h1 className="text-4xl text-center">SEGUNDA PLANTILLA</h1>

          <FieldArray name="secciones">
  {({ push }) => (
    <>
      {values.secciones.map((seccion, index) => (
        <div key={index} className="border p-4 rounded-md shadow">
          <label className="block font-bold">Sección {index + 1}</label>

          {/* Botones para elegir tipo */}
          <div className="flex gap-2 my-2">
            <button
              type="button"
              className={`p-1 px-4 rounded ${
                seccion.tipo === "TEXTO" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFieldValue(`secciones[${index}].tipo`, "TEXTO")}
            >
              Texto
            </button>
            <button
              type="button"
              className={`p-1 px-4 rounded ${
                seccion.tipo === "LISTA" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFieldValue(`secciones[${index}].tipo`, "LISTA")}
            >
              Lista
            </button>
          </div>

          {/* Textarea dinámico */}
          <Field
            as="textarea"
            name={`secciones[${index}].contenido`}
            placeholder={
              seccion.tipo === "LISTA"
                ? "Escribe los ítems separados por línea"
                : "Escribe el contenido del texto"
            }
            className={`w-full border rounded p-2 ${
              touched.secciones?.[index]?.contenido &&
              typeof errors.secciones?.[index] === "object" &&
              errors.secciones?.[index]?.contenido
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          {/* Error de validación seguro */}
          {touched.secciones?.[index]?.contenido &&
            typeof errors.secciones?.[index] === "object" &&
            errors.secciones?.[index]?.contenido && (
              <div className="text-red-500 text-sm mt-1">
                {errors.secciones[index].contenido}
              </div>
            )}
        </div>
      ))}

      {/* Botón para agregar nueva sección */}
      <button
        type="button"
        onClick={() =>
          push({
            tipo: "TEXTO",
            contenido: "",
          })
        }
        className="bg-purple-600 text-white p-2 rounded-md self-start"
      >
        + Nueva Sección
      </button>
    </>
  )}
</FieldArray>


          <button
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}
            className="bg-green-600 text-white py-2 rounded disabled:bg-gray-300 mt-4"
          >
            Enviar artículo
          </button>
        </Form>
      )}
    </Formik>
  );
}
