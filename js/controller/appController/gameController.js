import { PreguntaDao } from "../../model/dao/questionDao.js";


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
        contenedor.remove(formulario);
        const letra = document.createElement("h1");
        if(opcionAValidar.isCorrect()){
            letra.textContent = "CORRECTO";
            contenedor.append(letra);
        }else{
            letra.textContent = "RESPUESTA INCORRECTA";
            contenedor.append(letra);
        }

    }


}