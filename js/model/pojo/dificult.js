
export class Dificult {

    #idDificultad;
    #nombre;
    #preguntas;

    constructor(idDificultad,nombre,preguntas){
        this.#idDificultad = idDificultad;
        this.#nombre = nombre;
        this.#preguntas = preguntas;
    }

    getIdDificultad(){
        return this.#idDificultad;
    }

    getNombre(){
        return this.#nombre;
    }

    getPreguntas(){
        return this.#preguntas;
    }


}