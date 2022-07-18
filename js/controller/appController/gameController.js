import { PreguntaDao } from "../../model/dao/questionDao.js";
import { DificultDao } from "../../model/dao/dificultDao.js";
import { ViewBuilder } from "../viewController/viewBuilder.js";
import { Opcion } from "../../model/pojo/option.js";
import { ProceduresController } from "./ProceduresController.js";
export class GameController {


    static validarPregunta(e){
        e.preventDefault();
        const opcionElegidad = document.querySelector('input[name="selector"]:checked');
        const preguntaAValidar = PreguntaDao.obtenerPreguntaPorId(opcionElegidad.id);
        let opcionAValidar;
        preguntaAValidar.getOpciones().forEach((opcion)=>{
            if(opcion.getRespuesta() == opcionElegidad.value){
                opcionAValidar = opcion;
            }
        });
        const contenedor = document.querySelector(".main-container");
        const formulario = document.querySelector(".form-sofka");
        contenedor.removeChild(formulario);
        const letra = document.createElement("h1");
        let idDificultad = ProceduresController.sumarPartida();
        if(opcionAValidar.isCorrect()){
            if(idDificultad<=5){
                const dificultadInicial = DificultDao.obtenerDificultad(idDificultad);
                const preguntaElegida = dificultadInicial.getPreguntas()[Math.floor(Math.random()*5)];
                let arregloOpciones = new Array();
                preguntaElegida.getOpciones().forEach((opcion)=>{
                arregloOpciones.push(opcion.getRespuesta());
            });
            ViewBuilder.buildForm(Opcion.mezclarOpciones(arregloOpciones),preguntaElegida,dificultadInicial,GameController.validarPregunta);

            }else{
                letra.id = "referenciaWin"
                letra.textContent = "¡GANASTE EL JUEGO!!!";
                const boton = document.createElement("input");
                boton.type = "submit";
                boton.id = "buton";
                boton.value = "VOLVER A LA PANTALLA PRINCIPAL";
                boton.addEventListener("click",ProceduresController.recargarPantallaPrincipal);
                contenedor.append(letra,boton);
            }
        
        }else{
            letra.id = "referenciaLose"
            letra.textContent = "RESPUESTA INCORRECTA, PERDISTE LA PARTIDA";
            const boton = document.createElement("input");
            boton.type = "submit";
            boton.id = "buton";
            boton.value = "VOLVER A LA PANTALLA PRINCIPAL";
            boton.addEventListener("click",ProceduresController.recargarPantallaPrincipal);
            contenedor.append(letra,boton);
        }

    }


}