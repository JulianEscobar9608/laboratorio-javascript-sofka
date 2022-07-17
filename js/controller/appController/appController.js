import { ViewBuilder } from "../viewController/viewBuilder.js";
import { PlayerController } from "./playerController.js";
import { ProceduresController } from "./ProceduresController.js";

export class AppController{


    iniciarPartida(){
        ProceduresController.inicializarInformacion();
        ViewBuilder.buildIndex(PlayerController.ingresarUsuario);

    }


  
    






}