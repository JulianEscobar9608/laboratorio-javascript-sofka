export class Pregunta {
    
    #idPregunta;
    #categoria;
    #contenidoPregunta;
    #opciones;
    #puntos

    constructor(idPregunta,categoria,contenidoPregunta,opciones,puntos){
        this.#idPregunta = idPregunta;
        this.#categoria = categoria;
        this.#contenidoPregunta = contenidoPregunta;
        this.#opciones = opciones;
        this.#puntos = puntos;
    }

    getIdPregunta(){
        return this.#idPregunta
    }

    getCategoria(){
        return this.#categoria;
    }

    getContenidoPregunta(){
        return this.#contenidoPregunta
    }
    
    getOpciones(){
        return this.#opciones;
    }

    getPuntos(){
        return this.#puntos;
    }


}