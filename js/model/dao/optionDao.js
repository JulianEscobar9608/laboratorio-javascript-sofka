
import {Opcion} from '../pojo/option.js';

export class OptionDao{

    static obtenerOpcionesPorIdPregunta(id){
        const opciones = this.#leerOpciones();
        let opcionesEncontradas;
        opciones.forEach((opcion)=>{
            if(opcion.idPregunta == id){
                let arregloStringOpciones = [opcion.correcta,
                                         opcion.incorrecta1,
                                         opcion.incorrecta2,
                                         opcion.incorrecta3];
                opcionesEncontradas = this.#construirArregloOpciones(arregloStringOpciones);
            }
        });
        return opcionesEncontradas;
    }

    static #leerOpciones(){
        return JSON.parse(localStorage.getItem("opciones"));
    }

    static #construirArregloOpciones(arregloOpciones){
        const arregloConObjetosOpciones = new Array();
        for(let index = 0 ;index<arregloOpciones.length;index++){
            if(index==0){
                arregloConObjetosOpciones.push(new Opcion(arregloOpciones[index],true));
            }else{
                arregloConObjetosOpciones.push(new Opcion(arregloOpciones[index],false));
            }
        }
        return arregloConObjetosOpciones;
        
    }

}

