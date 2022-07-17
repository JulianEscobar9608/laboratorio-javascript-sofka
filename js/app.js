
import { AppController } from "./controller/appController/appController.js";


const contenedor = document.querySelector('.main-container');
const instanciaAppController = new AppController(contenedor);
instanciaAppController.iniciarPartida();
