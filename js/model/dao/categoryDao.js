
import { Categoria } from "../pojo/category.js"

export class CategoryDao{


    static obtenerCategoriaPorId(id){
        const categorias = this.#leerCategorias();
        let categoriaEncontrada;
        categorias.forEach((categoria)=>{
            if(categoria.idCategoria == id){
                categoriaEncontrada = new Categoria( categoria.idCategoria,
                                                     categoria.nombreCategoria);
            }
        });
        return categoriaEncontrada;
    }


    static #leerCategorias(){
        return JSON.parse(localStorage.getItem("categorias"));
    }


}