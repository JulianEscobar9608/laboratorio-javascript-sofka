
import { Punto } from "../pojo/point.js";


export class PointDao {

    static obtenerPuntoPorId(id){
        const puntos = this.#leerPuntos();
        let puntoEncontrado;
        puntos.forEach((punto)=>{
            if(punto.id == id){
                puntoEncontrado = new Punto(punto.cantidad);
            }
        });
        return puntoEncontrado;
    }



    static #leerPuntos(){
        return JSON.parse(localStorage.getItem("puntos"));
    }



}