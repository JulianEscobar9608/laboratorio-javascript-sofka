import { PreguntaDao } from "./questionDao.js";
import { Dificult } from "../pojo/dificult.js";

export class DificultDao {

    static obtenerDificultad(id){
        const dificultades = this.#leerDificultades();
        let dificultadEncontrada;
        dificultades.forEach((dificultad)=>{
            if(dificultad.id == id){
                dificultadEncontrada = new Dificult(dificultad.id,
                                                     dificultad.dificultad,
                                                     PreguntaDao.obtenerPreguntasPorDificultad(dificultad.id));
            }
        });
        return dificultadEncontrada;

    }


    static #leerDificultades(){
        return JSON.parse(localStorage.getItem("dificultades"));
    }




}