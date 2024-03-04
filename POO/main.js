class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    obtenerInfo() {
        return `Área del rectángulo: ${this.ancho * this.alto}`;
    }
}

const miRectangulo = new Rectangulo(12, 33);
const miRectangulopequeño = new Rectangulo(8, 10);

//reutilizar clases
console.log(miRectangulo);
console.log(miRectangulopequeño);

//reutilizar metodo
console.log(miRectangulo.obtenerInfo());
console.log(miRectangulopequeño.obtenerInfo())

//reutilizar parametros

console.log(miRectangulo.ancho);