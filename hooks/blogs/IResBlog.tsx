export interface IResBlog {
    id:               string;
    autor:            string;
    imagen1:          string;
    imagen2:          string;
    fechaPublicacion: Date;
    resumen:          string;
    category:         string;
    titulos:          Titulo[];
    seccionesTexto:   SeccionesTexto[];
}

export interface SeccionesTexto {
    id:        string;
    contenido: string;
    titulo:    Titulo[];
}

export interface Titulo {
    id:    string;
    texto: Texto;
    nivel: number;
}

export enum Texto {
    Inicio = "Inicio",
    LaHistoriaDeChocolate = "La historia de Chocolate",
    TítuloDeCuartaSeccion = "Título de cuarta seccion",
    TítuloDeSegundaSeccion = "Título de segunda seccion",
    TítuloDeTerceraSeccion = "Título de tercera seccion",
}
export interface IResBlogID {
    id:               string;
    autor:            string;
    imagen1:          string;
    imagen2:          string;
    fechaPublicacion: Date;
    resumen:          string;
    category:         string;
    titulos:          Titulo2[];
    seccionesTexto:   SeccionesTexto2[];
}

export interface SeccionesTexto2 {
    id:        string;
    contenido: string;
    titulo:    Titulo2[];
}

export interface Titulo2 {
    id:    string;
    texto: string;
    nivel: number;
}
