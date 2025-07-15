import { IPropsForm } from "@/components/plantillasTypePeriodico/createPlantillas/createSecondPlantilla";

// Función para limpiar strings y filtrar bloques vacíos
export function limpiarSecciones(secciones: IPropsForm["secciones"]) {
  return secciones
    .map((seccion) => {
      const bloquesLimpios = seccion.bloques
        .map((bloque) => {
          // Eliminar saltos de línea y reemplazar por espacios, luego hacer trim
          const contenidoSinSaltos = bloque.contenido.replace(/\n/g, " ").trim();
          // También puedes reemplazar múltiples espacios seguidos por uno solo
          const contenidoFinal = contenidoSinSaltos.replace(/\s+/g, " ");
          return { ...bloque, contenido: contenidoFinal };
        })
        .filter((bloque) => bloque.contenido.length > 0); // Solo bloques con contenido no vacío

      return {
        ...seccion,
        subtitulo: seccion.subtitulo.trim(),
        bloques: bloquesLimpios,
      };
    })
    .filter((seccion) => seccion.bloques.length > 0); // Solo secciones con bloques con contenido
}
