import { IReqLogin } from "@/hooks/login/IReqLogin";
import { useLogin } from "@/hooks/login/useLogin";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";
import * as Yup from "yup";
import FONDO2 from "../public/assets/img/carita.png";
import FONDO1 from "../public/assets/img/fondo20.jpg";
import toast from "react-hot-toast";
export const ACCESS_TOKEN_KEY = "DRY";
export const REFRESH_TOKEN_KEY = "KISS";
export default function login() {
  const router = useRouter();
  const { mutationLogin } = useLogin();
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };
  const VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });

  const handleSubmit = async (values: typeof INITIAL_VALUES) => {
    console.log("VALUES", values);

    const trimmedValues: IReqLogin = {
      correo: values.email.trim(),
      password: values.password.trim(),
    };

    try {
      mutationLogin.mutate(trimmedValues, {
        onSuccess: (data) => {
          console.log("Login exitoso:", data);
          secureLocalStorage.setItem(ACCESS_TOKEN_KEY, data.access_token);
          
          toast.success("Inicio Correcto")
          router.push("/createNews");
        },
        onError: (error) => {
          toast.error("Error de Inicio Seccion")
          console.error("Error en login:", error);
          console.log("ERROR LOGIN", error);
        },
      });
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  return (
    <div className="relative">
      {/* Imagen de fondo ocupando toda la pantalla */}
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Image src={FONDO1} alt="Fondo" fill style={{ objectFit: "cover" }} priority />
      </div>

      {/* Contenido encima de la imagen con animación */}
      <motion.div
        className="relative flex justify-center flex-col items-center z-10 text-white rounded-xl max-w-xl mx-auto top-14 h-[40rem] bg-white/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={FONDO2}
          alt="Foto redonda"
          width={200}
          height={200}
          className="mx-auto rounded-full object-cover aspect-square"
          priority
        />

        <p className="text-xl px-5 pt-5 text-black text-center">👋 ¡Ey Harry! Ya sabés que desde acá se mueven los hilos.</p>
        <p className="text-xl px-5 text-black text-center">🚀 ¡A darle con todo!</p>

        <Formik initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form noValidate>
              {/* Email input */}
              <div className="mb-4 mt-5">
                <Field
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className={`w-full py-2 px-10 text-gray-800 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.email && touched.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-600 mt-1 text-sm" />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <Field
                  name="password"
                  placeholder="Contraseña"
                  className={`w-full px-10 py-2 text-gray-800 bg-white rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.password && touched.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="password" component="div" className="text-red-600 mt-1 text-sm" />
              </div>

              {/* Submit button */}
              <button type="submit" className="w-full rounded-xl bg-orange-400 text-white py-3  hover:bg-orange-400 transition">
                Vamos
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}
