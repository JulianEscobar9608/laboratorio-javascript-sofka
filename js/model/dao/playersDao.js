import { Player } from "../pojo/player.js";


export class PlayerDao {


    static registrarJugador(jugador){
        const jugadores = this.#leerJugadores();
        jugadores.push(jugador);
        localStorage.setItem("jugadores",JSON.stringify(jugadores));
    }

    static #leerJugadores(){
        return JSON.parse(localStorage.getItem("jugadores"));
    }

    static obtenerJugadores(){
        const jugadores = this.#leerJugadores();
        const arrayJugadores = new Array();
        jugadores.forEach((jugador)=>{
            arrayJugadores.push(new Player(
                                           jugador.idUsuario,
                                           jugador.nombre
            ));
        });
        return arrayJugadores;


    }



}