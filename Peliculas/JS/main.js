import Pelicula from './Pelicula.js'

class Main {
    constructor() {

        document.querySelector('#btnAgregar').addEventListener('click', this.onAgregar);
    }

    onAgregar() {

        let nombre = document.querySelector('#nombre').value;
        let genero = document.querySelector('#genero').value;
        let año = document.querySelector('#año').value;
        let duracion = document.querySelector('#duracion').value;
  

        let p1 = new Pelicula(nombre.value,
            genero.value,
            Number(año.value),
            Number(duracion.value));
    }

}

var m = new Main();

//carrito de compras y para este carrito de compras se debe hacer la clase de productos. Esta clase de producto va a tener el nombre del producto, la cantidad, y el precio unitario. estos son los atributos y como metodos va a tener dos metodo uno regresa el monto total enpesos y el otro el precio total en dolares.
// el html va atener u nformulario donde se puede capturr el nombre del producto la cantida y el precio unitario.
//y en el boton se hara un instancia de ese producto.