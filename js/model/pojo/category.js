
export class Categoria {

    #idCategoria;
    #categoria;

    constructor(idCategoria,categoria){
        this.#idCategoria = idCategoria;
        this.#categoria = categoria;
    }

    getIdCategoria(){
        return this.#idCategoria;
    }

    getCategoria(){
        return this.#categoria;
    }
  

}

