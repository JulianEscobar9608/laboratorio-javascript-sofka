
import { PlayerController } from "../appController/playerController.js"; 
import { AppPageBuilder } from "./appPageBuilder.js"

export class ViewBuilder{


    static buildForm(arregloIdRadio,pregunta,dificultad,metodo){


        AppPageBuilder.addNewElement("form","form-sofka","form-sofka",undefined);
        AppPageBuilder.insertNewNode("form-sofka","h1","dif"+dificultad.getIdDificultad(),"dif"+dificultad.getIdDificultad(),"DIFICULTAD: "+dificultad.getNombre());
        AppPageBuilder.insertNewNode("form-sofka","h1","cat"+dificultad.getIdDificultad(),"cat"+dificultad.getIdDificultad(),"CATEGORIA: "+pregunta.getCategoria().getCategoria());
        AppPageBuilder.insertNewNode("form-sofka","h1","punt"+dificultad.getIdDificultad(),"punt"+dificultad.getIdDificultad(),"PUNTUACION: "+pregunta.getPuntos().getCantidad());
        AppPageBuilder.insertNewNode("form-sofka","h1","preg"+dificultad.getIdDificultad(),"preg"+dificultad.getIdDificultad(),"PREGUNTA: "+pregunta.getContenidoPregunta());
        arregloIdRadio.forEach((idRadio)=>{
        
            AppPageBuilder.insertNewNodeForm("form-sofka","input",pregunta.getIdPregunta(),"radio","class-input",idRadio,"selector",idRadio);
        });
        AppPageBuilder.insertNewEventNode("form-sofka","input","buton","submit","boton","enviar","ENVIAR RESPUESTA",undefined,metodo);

    }

    static buildIndex(metod){
        AppPageBuilder.addNewElement("div","cont-index","cont-index");
        AppPageBuilder.insertNewNode("cont-index","h1","titulo","titulo","QUIEN QUIERE SER MILLONARIO");
        AppPageBuilder.insertNewNode("cont-index","p","parrafo","parrafo","JUEGA PARA GANAR NUESTROS ESPECTACULARES PREMIOS");
        AppPageBuilder.insertNewNodeForm("cont-index","input","insertarNombre","text","insertarNombre","POR FAVOR INGRESE SU NOMBRE DE USUARIO","inputName","");
        AppPageBuilder.insertNewEventNode("cont-index","input","submitIndex","submit","submitIndex","submitIndex","INICIAR PARTIDA","click",metod)
        AppPageBuilder.insertNewEventNode("cont-index","input","submitVer","submit","submitVer","submitIndex","VISUALIZAR REGISTRO DE JUGADORES","click",PlayerController.listarJugadores);
        
    }

}