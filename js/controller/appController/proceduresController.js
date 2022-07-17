import { questions } from "../../data/questions.js";
import { options } from "../../data/options.js";
import { categories } from "../../data/categories.js";
import { dificulties } from "../../data/dificult.js";
import { points } from "../../data/points.js";

export class ProceduresController {

    static inicializarInformacion(){

        if(!localStorage.getItem("jugadores")){
            localStorage.setItem("jugadores","[]");
            localStorage.setItem("preguntas",JSON.stringify(questions));
            localStorage.setItem("opciones",JSON.stringify(options));
            localStorage.setItem("categorias",JSON.stringify(categories));
            localStorage.setItem("dificultades",JSON.stringify(dificulties));
            localStorage.setItem("puntos",JSON.stringify(points));
        }

        this.contarPartida();

    }

    static contarPartida(){
        localStorage.setItem("contadorPartida","1");

    }

   
}