export default class Pelicula{
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