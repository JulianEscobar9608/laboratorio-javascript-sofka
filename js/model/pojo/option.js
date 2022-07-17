export class Opcion{

    #respuesta
    #isCorrect

    constructor(respuesta,isCorrect){
        
        this.#respuesta = respuesta;
        this.#isCorrect = isCorrect;
    }

    getRespuesta(){
        return this.#respuesta;
    }

    isCorrect(){
        return this.#isCorrect;
    }

}
