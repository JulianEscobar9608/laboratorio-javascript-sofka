import { PlayerDao } from "../../model/dao/playersDao.js";
import { ViewBuilder } from "../viewController/viewBuilder.js";
import { DificultDao } from "../../model/dao/dificultDao.js";
import { GameController } from "./gameController.js";
import { Opcion } from "../../model/pojo/option.js";
import { ProceduresController } from "./ProceduresController.js";

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
        const preguntaElegida = dificultadInicial.getPreguntas()[Math.floor(Math.random()*5)];
        let arregloOpciones = new Array();
        preguntaElegida.getOpciones().forEach((opcion)=>{
            arregloOpciones.push(opcion.getRespuesta());
        });
        ProceduresController.contarPartida();
        ViewBuilder.buildForm(Opcion.mezclarOpciones(arregloOpciones),preguntaElegida,dificultadInicial,GameController.validarPregunta);
    }


    static listarJugadores(){
        const contenedor = document.getElementById("main-container");
        const contNodo = document.getElementById("cont-index");
        contenedor.removeChild(contNodo);
        const table = document.createElement('table');
        table.id ="tabla-jugadores";
        const head = document.createElement('thead');
        const h = document.createElement('th');
        h.textContent = "JUGADORES REGISTRADOS";
        head.append(h);
        table.append(head);
        const bod = document.createElement('tbody');
        let jugadores = PlayerDao.obtenerJugadores();
        jugadores.forEach((jugador)=>{
            const b = document.createElement('tr');
            b.id = "tr"+jugador.getIdJugador();
            b.textContent = jugador.getNombreUsuario();
            bod.append(b);
        });
        table.append(bod);
        contenedor.append(table);
        const botonRem = document.createElement("input");
        botonRem.id = "buton"
        botonRem.type = "submit";
        botonRem.value ="REGRESAR AL MENU PRINCIPAL";
        botonRem.addEventListener("click",ProceduresController.recargarPantallaVistaTabla);
        contenedor.append(botonRem);
    }


}