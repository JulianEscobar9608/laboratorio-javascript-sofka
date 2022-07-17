import { PlayerDao } from "../../model/dao/playersDao.js";
import { ViewBuilder } from "../viewController/viewBuilder.js";
import { DificultDao } from "../../model/dao/dificultDao.js";
import { GameController } from "./gameController.js";

export class PlayerController {

    static ingresarUsuario(){
        const nombreJugador = document.getElementById('insertarNombre').value;
        const jugadores = PlayerDao.obtenerJugadores();
        let index = jugadores[jugadores.length] == undefined ? 1 : (jugadores[jugadores.length].idUsuario + 1);
        const jugador = {
                idUsuario : index,
                nombre : nombreJugador
            }  
        PlayerDao.registrarJugador(jugador)
        const contenedorprincipal = document.getElementById("main-container");
        const divMain = document.getElementById("cont-index");
        contenedorprincipal.removeChild(divMain);
        const dificultadInicial = DificultDao.obtenerDificultad(1);
        console.log(dificultadInicial);
        const preguntaElegida = dificultadInicial.getPreguntas()[1];
        console.log(preguntaElegida);
        let arreglo = new Array();
        preguntaElegida.getOpciones().forEach((opcion)=>{
            arreglo.push(opcion.getRespuesta());
        });
        ViewBuilder.buildForm(arreglo,preguntaElegida.getIdPregunta(),GameController.validarPregunta);
    }



}