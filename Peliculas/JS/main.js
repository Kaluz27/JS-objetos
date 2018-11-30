
class Pelicula{
    constructor(nombre, genero, año,duracion ){
        this.nombre=nombre;
        this.genero=genero;
        this.duracion=duracion;
        this.año=año;
    }
    getDuracionEnHoras(){
        let resultado = this.duracion/60 ;

        return resultado;
    }
}
var p1 = new Pelicula('Avengers','Acciòn', 2017, 120);
var p2 = new Pelicula('Harry Potter');

console.log(p1)
console.log(p2)
