export class AppPageBuilder {

    static #counterElement = 0;

    static addNewElement(tag, id ,clase = "default",contenido = ""){
        const contenedor = document.querySelector('.main-container');
        const newDomElement = document.createElement(tag);
        newDomElement.classList.add(clase);
        newDomElement.id = id == undefined ? "element-"+this.addCounterElement() : id;
        newDomElement.textContent = contenido;
        contenedor.append(newDomElement);
        
    }
    static addCounterElement(){
        this.#counterElement += 1;
        return this.#counterElement;
    }

    static insertNewNode(idFather,tag,id,clase = "default",contenido = ""){
        const padre = document.getElementById(idFather);
        const nodo = document.createElement(tag);
        nodo.classList.add(clase);
        nodo.id = id == undefined ? "element-"+this.addCounterElement() : id;
        nodo.textContent = contenido;
        padre.append(nodo);
        
    }

    static insertNewNodeForm(idFather,tag,id,type = "text",clase = "default",contenido = "default",nombre ="default", value = "default"){
        const nodoPadre = document.getElementById(idFather);
        const nodo = document.createElement(tag);
        const expositor = document.createElement('label');
        const salto = document.createElement('br');
        expositor.for = id;
        expositor.textContent = contenido;
        nodo.classList.add(clase);
        nodo.id = id == undefined ? "element-"+this.addCounterElement() : id;
        nodo.type = type;
        nodo.value = value;
        nodo.name = nombre;  
        nodo.required = true;     
        nodoPadre.append(nodo,expositor,salto);
    }

    static insertNewEventNode(idFather,tag,id,type = "submit",clase = "default",nombre ="default", value = "default",evento = "click",metodo = undefined){
        const fatherNode = document.getElementById(idFather);
        const nodo = document.createElement(tag);
        const salto = document.createElement('br');
        nodo.classList.add(clase);
        nodo.id = id == undefined ? "element-"+this.addCounterElement() : id;
        nodo.type = type;
        nodo.value = value;
        nodo.name = nombre;
        nodo.addEventListener(evento,metodo);       
        fatherNode.append(salto,nodo);
    }

}