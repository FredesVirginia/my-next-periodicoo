import { Circulo, CruzChica, CruzGrande, Fondo, Mas } from "@/components/formas/formas";
import { IReqCreateBlog } from "@/hooks/createBlog/IReqCreateBlog";
import { useHookCreatedBlog } from "@/hooks/createBlog/useHookCreateBlog";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

type FormValues = {
  titulo: string;
  resumen: string;
  subtitulo1: string;
  texto1: string;
  subtitulo2: string;
  texto2: string;
  subtitulo3: string;
  texto3: string;
  subtitulo4: string;
  texto4: string;
};

type Array1 = {
  contenido: string;
};

type Array2 = {
  texto: string;
  nivel: number;
  seccionIndex: number | null;
};
export default function CreateFirtPlantilla() {
  const [formData, setFormData] = useState<FormValues>();

  const { mutationCreateBlog } = useHookCreatedBlog();
  const validationSchema = Yup.object({
    titulo: Yup.string().required("Campo requerido"),
    resumen: Yup.string()
      .required("Este campo es obligatorio")
      .test("max-words", "Máximo 34 palabras", (value) => {
        if (!value) return true;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 34;
      }),
    subtitulo1: Yup.string().required("Este campo es obligatorio"),
    texto1: Yup.string()
      .required("Este campo es obligatorio")
      .test("max-words", "Máximo 224 palabras", (value) => {
        if (!value) return true;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 224;
      }),
    subtitulo2: Yup.string().required("Este campo es obligatorio"),
    texto2: Yup.string()
      .required("Este campo es obligatorio")
      .test("max-words", "Máximo 224 palabras", (value) => {
        if (!value) return true;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 224;
      }),
    subtitulo3: Yup.string().required("Este campo es obligatorio"),
    texto3: Yup.string()
      .required("Este campo es obligatorio")
      .test("max-words", "Máximo 102 palabras", (value) => {
        if (!value) return true;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 102;
      }),
    subtitulo4: Yup.string().required("Este campo es obligatorio"),
    texto4: Yup.string()
      .required("Este campo es obligatorio")
      .test("max-words", "Máximo 102 palabras", (value) => {
        if (!value) return true;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 102;
      }),
  });

  const handleClick = (formDataParam: FormValues) => {
    console.log("DATOS =====>", formData);
    const array1: Array1[] = [];
    const array2: Array2[] = [];
    if (formDataParam) {
      array1.push({ contenido: formDataParam.texto1 });
      array1.push({ contenido: formDataParam.texto2 });
      array1.push({ contenido: formDataParam.texto3 });
      array1.push({ contenido: formDataParam.texto4 });

      array2.push({
        texto: formDataParam.titulo,
        nivel: 1,
        seccionIndex: null,
      });
      array2.push({ texto: formDataParam.titulo, nivel: 2, seccionIndex: 0 });
      array2.push({ texto: formDataParam.titulo, nivel: 2, seccionIndex: 1 });
      array2.push({ texto: formDataParam.titulo, nivel: 2, seccionIndex: 2 });
      array2.push({ texto: formDataParam.titulo, nivel: 2, seccionIndex: 3 });

      console.log("EL ARRRRRRRRRRRRRRRRRA ", array1);
    }

    const newData: IReqCreateBlog = {
      autor: "Jonh Clein",
      imagen1: "h",
      imagen2: "w",
      resumen: formDataParam.resumen,
      secciones: array1,
      titulos: array2,
    };

    console.log("BACK", newData);

    mutationCreateBlog.mutate(newData);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Fondo />
      <div className=" py-10 relative z-10 ">
        <div className="bg-white rounded-2xl py-10 flex justify-center items-center mx-auto flex-col w-[50rem]">
          <div className="flex  w-full justify-center gap-20">
            <CruzGrande />
            <h1 className="text-center text-4xl mb-5 ">Create Blog</h1>
            <Circulo />
          </div>
          <div className="flex w-[50rem] mx-auto justify-center rounded-2xl bg-viole500">
            <div className=" flex-1 flex flex-col items-center justify-between my-40">
              <Mas />
              <Circulo />
              <CruzChica />
            </div>
            <Formik
              initialValues={{
                titulo: "",
                resumen: "",
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
                //resetForm();
                setFormData(values);
                handleClick(values);
              }}
            >
              {({ errors, touched, isValid, dirty, isSubmitting }) => (
                <Form className="flex flex-[6] flex-col gap-8 max-w-3xl mx-auto p-8 bg-white ">
                  {/* Título */}
                  <div className="bg-gray-100 rounded-xl">
                    <Field
                      as="textarea"
                      id="titulo"
                      name="titulo"
                      rows={2}
                      className={`w-full px-4 py-3 bordr rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                        touched.titulo && errors.titulo ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                      }`}
                      placeholder="Ingrese el título"
                    />
                    {touched.titulo && errors.titulo && <p className="text-red-500 text-sm mt-2">{errors.titulo}</p>}
                  </div>

                  <div className="">
                  <Field name="resumen">
                      {({ field, meta }: any) => {
                        const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                        return (
                          <div className="relative">
                            <textarea
                              {...field}
                              rows={4}
                              className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                                meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                              }`}
                              placeholder="Ingrese resumen"
                            />
                            <div className="text-sm text-right pr-2   text-gray-500">{wordCount} / 34 palabras</div>
                            {meta.touched && meta.error && <p className="text-red-500 text-sm mt-2">{meta.error}</p>}
                          </div>
                        );
                      }}
                    </Field>
                  </div>

                  {/* Sección 1 */}
                  <div className="">
                    <Field
                      as="textarea"
                      id="subtitulo1"
                      name="subtitulo1"
                      rows={2}
                      className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                        touched.subtitulo1 && errors.subtitulo1 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                      }`}
                      placeholder="Ingrese el subtítulo 1"
                    />
                    {touched.subtitulo1 && errors.subtitulo1 && <p className="text-red-500 text-sm mt-2">{errors.subtitulo1}</p>}

                    <Field name="texto1">
                      {({ field, meta }: any) => {
                        const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                        return (
                          <div className="relative">
                            <textarea
                              {...field}
                              rows={4}
                              className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                                meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                              }`}
                              placeholder="Ingrese el texto 1 jbhjbuh"
                            />
                            <div className="text-sm text-right pr-2 text-gray-500">{wordCount} / 224 palabras</div>
                            {meta.touched && meta.error && <p className="text-red-500 text-sm mt-2">{meta.error}</p>}
                          </div>
                        );
                      }}
                    </Field>
                  </div>

                  {/* Sección 2 */}
                  <div className="">
                    <Field
                      as="textarea"
                      id="subtitulo2"
                      name="subtitulo2"
                      rows={2}
                      className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                        touched.subtitulo2 && errors.subtitulo2 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                      }`}
                      placeholder="Ingrese el subtítulo 2"
                    />
                    {touched.subtitulo2 && errors.subtitulo2 && <p className="text-red-500 text-sm mt-2">{errors.subtitulo2}</p>}

                    <Field name="texto2">
                      {({ field, meta }: any) => {
                        const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                        return (
                          <div className="relative">
                            <textarea
                              {...field}
                              rows={4}
                              className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                                meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                              }`}
                              placeholder="Ingrese el texto 1 jbhjbuh"
                            />
                            <div className="text-sm text-right pr-2 text-gray-500">{wordCount} / 224 palabras</div>
                            {meta.touched && meta.error && <p className="text-red-500 text-sm mt-2">{meta.error}</p>}
                          </div>
                        );
                      }}
                    </Field>
                  </div>

                  {/* Sección 3 */}
                  <div className="">
                    <Field
                      as="textarea"
                      id="subtitulo3"
                      name="subtitulo3"
                      rows={2}
                      className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                        touched.subtitulo3 && errors.subtitulo3 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                      }`}
                      placeholder="Ingrese el subtítulo 3"
                    />
                    {touched.subtitulo3 && errors.subtitulo3 && <p className="text-red-500 text-sm mt-2">{errors.subtitulo3}</p>}

                  <Field name="texto3">
                      {({ field, meta }: any) => {
                        const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                        return (
                          <div className="relative">
                            <textarea
                              {...field}
                              rows={4}
                              className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                                meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                              }`}
                              placeholder="Ingrese el texto 1 jbhjbuh"
                            />
                            <div className="text-sm text-right pr-2 text-gray-500">{wordCount} / 102 palabras</div>
                            {meta.touched && meta.error && <p className="text-red-500 text-sm mt-2">{meta.error}</p>}
                          </div>
                        );
                      }}
                    </Field>
                  </div>

                  {/* Sección 4 */}
                  <div className="">
                    <Field
                      as="textarea"
                      id="subtitulo4"
                      name="subtitulo4"
                      rows={2}
                      className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                        touched.subtitulo4 && errors.subtitulo4 ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                      }`}
                      placeholder="Ingrese el subtítulo 4"
                    />
                    {touched.subtitulo4 && errors.subtitulo4 && <p className="text-red-500 text-sm mt-2">{errors.subtitulo4}</p>}

                    <Field name="texto4">
                      {({ field, meta }: any) => {
                        const wordCount = field.value?.trim().split(/\s+/).filter(Boolean).length || 0;
                        return (
                          <div className="relative">
                            <textarea
                              {...field}
                              rows={4}
                              className={`w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                                meta.touched && meta.error ? "border-red-500 focus:ring-red-400" : "border-gray-300"
                              }`}
                              placeholder="Ingrese el texto 1 jbhjbuh"
                            />
                            <div className="text-sm text-right pr-2 text-gray-500">{wordCount} / 102 palabras</div>
                            {meta.touched && meta.error && <p className="text-red-500 text-sm mt-2">{meta.error}</p>}
                          </div>
                        );
                      }}
                    </Field>
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
            <div className=" flex-1 flex flex-col items-center justify-between ">
              <CruzGrande />
              <Mas />
              <Circulo />
              <CruzChica />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
