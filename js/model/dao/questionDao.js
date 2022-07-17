
import { Pregunta } from "../pojo/question.js";
import { CategoryDao } from "./categoryDao.js";
import { OptionDao } from "./optionDao.js";
import { PointDao } from "./pointDao.js";

export class PreguntaDao {

    static obtenerPreguntasPorDificultad(dificult){
        const preguntas = this.#leerPreguntas();
        const preguntasEncontradas = new Array();
        preguntas.forEach((pregunta)=>{
            if(pregunta.idDificultad == dificult){
                preguntasEncontradas.push(new Pregunta( pregunta.idPregunta,
                                                    CategoryDao.obtenerCategoriaPorId(pregunta.idCategoria),
                                                    pregunta.pregunta,
                                                    OptionDao.obtenerOpcionesPorIdPregunta(pregunta.idPregunta),
                                                    PointDao.obtenerPuntoPorId(pregunta.puntos)));
            }
        });
        return preguntasEncontradas;
    }

    static obtenerPreguntaPorId(id){
        const preguntas = this.#leerPreguntas();
        let preguntasEncontradas;
        preguntas.forEach((pregunta)=>{
            if(pregunta.idPregunta == id){
                preguntasEncontradas = new Pregunta( pregunta.idPregunta,
                                                    CategoryDao.obtenerCategoriaPorId(pregunta.idCategoria),
                                                    pregunta.pregunta,
                                                    OptionDao.obtenerOpcionesPorIdPregunta(pregunta.idPregunta),
                                                    PointDao.obtenerPuntoPorId(pregunta.puntos));
            }
        });
        return preguntasEncontradas;
    }
    
    static #leerPreguntas(){
        return JSON.parse(localStorage.getItem("preguntas"));
    }
    

}


