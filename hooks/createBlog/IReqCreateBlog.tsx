export interface IReqCreateBlog {
    autor:     string;
    resumen:   string;
    imagen1 : string;
    imagen2 : string;
    secciones: Seccione[];
    titulos:   Titulo[];
}

export interface Seccione {
    contenido: string;
}

export interface Titulo {
    texto:        string;
    nivel:        number;
    seccionIndex: number | null;
}
