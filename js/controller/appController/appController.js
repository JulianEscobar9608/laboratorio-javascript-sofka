import { ViewBuilder } from "../viewController/viewBuilder.js";
import { PlayerController } from "./playerController.js";
import { ProceduresController } from "./proceduresController.js";

export class AppController{

    static iniciarPartida(){
        ProceduresController.inicializarInformacion();
        ViewBuilder.buildIndex(PlayerController.ingresarUsuario);

    }


  
    






}