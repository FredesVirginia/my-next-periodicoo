import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function CreatedSecondPlantilla() {
  const validationSchema = Yup.object({
    textarea1: Yup.string().required("Este campo es obligatorio"),
    textarea2: Yup.string().required("Este campo es obligatorio"),
    textarea3: Yup.string().required("Este campo es obligatorio"),
  });
  return (
    <Formik
      initialValues={{
        textarea1: "",
        textarea2: "",
        textarea3: "",
      }}
      validationSchema={validationSchema}
      validateOnMount={true} // Importante para que el botón esté deshabilitado al inicio
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto">
          <div>
            <h1 className="text-5xl text-center">SEGNDA PLANTILLA</h1>
            <label htmlFor="textarea1" className="block font-medium">
              Texto 1
            </label>
            <Field
              as="textarea"
              id="textarea1"
              name="textarea1"
              className={`w-full border rounded p-2 ${
                touched.textarea1 && errors.textarea1 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {touched.textarea1 && errors.textarea1 && <div className="text-red-500 text-sm mt-1">{errors.textarea1}</div>}
          </div>

          <div>
            <label htmlFor="textarea2" className="block font-medium">
              Texto 2
            </label>
            <Field
              as="textarea"
              id="textarea2"
              name="textarea2"
              className={`w-full border rounded p-2 ${
                touched.textarea2 && errors.textarea2 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {touched.textarea2 && errors.textarea2 && <div className="text-red-500 text-sm mt-1">{errors.textarea2}</div>}
          </div>

          <div>
            <label htmlFor="textarea3" className="block font-medium">
              Texto 3
            </label>
            <Field
              as="textarea"
              id="textarea3"
              name="textarea3"
              className={`w-full border rounded p-2 ${
                touched.textarea3 && errors.textarea3 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {touched.textarea3 && errors.textarea3 && <div className="text-red-500 text-sm mt-1">{errors.textarea3}</div>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded disabled:bg-gray-300"
            disabled={!isValid || !dirty || isSubmitting}
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}
