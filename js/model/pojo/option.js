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

    static mezclarOpciones(opciones){
        for(let index = 0;index<opciones.length;index++){
            let random = Math.floor(Math.random()*4);
            let burbuja = opciones[random];
            opciones[random] = opciones[index];
            opciones[index] = burbuja;
        } 
        return opciones;
    }

}
