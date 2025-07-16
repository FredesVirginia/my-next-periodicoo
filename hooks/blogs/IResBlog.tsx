
export enum ICategoryBlog {
    PLANTILLA_1 = "PLANTILLA_1" ,
     PLANTILLA_2 = "PLANTILLA_2" ,
      PLANTILLA_3 = "PLANTILLA_3" ,
       PLANTILLA_4 = "PLANTILLA_4" ,
}

export interface INewGetBlog {
    id:               string;
    autor:            string;
    imagen1:          string;
    imagen2:          string;
    fechaPublicacion: Date;
    resumen:          string;
    category:         ICategoryBlog;
    titulos:          TituloNew[];
    seccionesTexto:   SeccionNew[];
}

export interface SeccionNew {
    id:        string;
    contenido: string;
}

export interface TituloNew {
    id:      string;
    texto:   string;
    nivel:   number;
    seccion: SeccionNew | null;
}

export interface IResBlog {
    id:               string;
    autor:            string;
     titulo:      string;
    imagen1:          string;
    imagen2:          string;
    fechaPublicacion: Date;
    resumen:          string;
    category:         ICategoryBlog;
    seccionesTexto:   SeccionesTexto[];
}

export interface SeccionesTexto {
    id:        string;
    subtitulo: string;
    bloques:   Bloque[];
}

export interface Bloque {
    id:        string;
    tipo:      string;
    contenido: string;
}









export interface IResBlogID {
    id:               string;
    autor:            string;
    titulo:           string;
    imagen1:          string;
    imagen2:          string;
    fechaPublicacion: Date;
    resumen:          string;
    category:         string;
    seccionesTexto:   SeccionesTexto[];
}

export interface SeccionesTexto {
    id:        string;
    subtitulo: string;
    bloques:   Bloque[];
}

export interface Bloque {
    id:        string;
    tipo:      string;
    contenido: string;
}

