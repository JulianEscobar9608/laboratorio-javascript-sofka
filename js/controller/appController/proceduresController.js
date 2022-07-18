import { questions } from "../../data/questions.js";
import { options } from "../../data/options.js";
import { categories } from "../../data/categories.js";
import { dificulties } from "../../data/dificult.js";
import { points } from "../../data/points.js";
import { AppController } from "./appController.js";

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

    }

    static contarPartida(){
        localStorage.setItem("contadorPartida","1");

    }

    static sumarPartida(){
        let num = localStorage.getItem("contadorPartida");
        let numero = Number.parseInt(num);
        numero += 1;
        localStorage.setItem("contadorPartida",numero.toString());
        return numero;
    }

    static recargarPantallaPrincipal(){
        const h = document.getElementById("referenciaWin");
        const h2 = document.getElementById("referenciaLose");
        const btn = document.getElementById("buton");
        const contenedor = document.getElementById("main-container");
        if(h == undefined){
            contenedor.removeChild(h2);
        }else{
            contenedor.removeChild(h1);
        }
        contenedor.removeChild(btn);
        AppController.iniciarPartida();
    }

    static recargarPantallaVistaTabla(){
        const table = document.getElementById("tabla-jugadores");
        const btn = document.getElementById("buton");
        const contenedor = document.getElementById("main-container");
        contenedor.removeChild(table);
        contenedor.removeChild(btn);
        AppController.iniciarPartida();
    }

   
}