
export class Player{

    #idJugador
    #nombreUsuario

    constructor(id,nombreUsuario){
        this.#idJugador = id;
        this.#nombreUsuario = nombreUsuario;
    }

    getIdJugador(){
        return this.#idJugador   
    }

    getNombreUsuario(){
        return this.#nombreUsuario;   
    }



}