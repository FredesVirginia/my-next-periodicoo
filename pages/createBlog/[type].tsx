// pages/crear-noticia/[type].tsx
import { useRouter } from "next/router";
import FormCreateNews from "../formCreateNews";


export default function CrearNoticiaPage() {
  const router = useRouter();
  const { type } = router.query;

  if (!type) return null; // O un loading

  // Valida el tipo para evitar errores
  if (type !== "FIRTS" && type !== "SECOND") {
    return <div>Plantilla no válida</div>;
  }

  return <FormCreateNews type={type as "FIRTS" | "SECOND"} />;
}
