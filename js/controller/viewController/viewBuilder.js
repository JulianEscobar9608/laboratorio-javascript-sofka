
import { AppPageBuilder } from "./appPageBuilder.js"

export class ViewBuilder{


    static buildForm(arregloIdRadio,id,metodo){

        AppPageBuilder.addNewElement("form","form-sofka","form-sofka",undefined);
        arregloIdRadio.forEach((idRadio)=>{

            AppPageBuilder.insertNewNodeForm("form-sofka","input",id,"radio","class-input",idRadio,"selector",idRadio);
        });
        AppPageBuilder.insertNewEventNode("form-sofka","input","buton","submit","boton","enviar","ENVIAR RESPUESTA",undefined,metodo);

    }

    static buildIndex(metod){
        AppPageBuilder.addNewElement("div","cont-index","cont-index");
        AppPageBuilder.insertNewNode("cont-index","h1","titulo","titulo","QUIEN QUIERE SER MILLONARIO");
        AppPageBuilder.insertNewNode("cont-index","p","parrafo","parrafo","JUEGA PARA GANAR NUESTROS ESPECTACULARES PREMIOS");
        AppPageBuilder.insertNewNodeForm("cont-index","input","insertarNombre","text","insertarNombre","POR FAVOR INGRESE SU NOMBRE DE USUARIO","inputName","");
        AppPageBuilder.insertNewEventNode("cont-index","input","submitIndex","submit","submitIndex","submitIndex","ENVIAR","click",metod)
        
    }


}