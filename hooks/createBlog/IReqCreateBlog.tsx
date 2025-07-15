export interface IReqCreatedBlog {
    autor:     string;
    category:  string;
    titulo:    string;
    resumen:   string;
    imagen1:   string;
    imagen2:   string;
    secciones: Seccione[];
}

export interface Seccione {
    subtitulo: string;
    bloques:   Bloque[];
}

export interface Bloque {
    tipo:      string;
    contenido: string;
}

