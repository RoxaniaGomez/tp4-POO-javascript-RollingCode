class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    getPerimetro() {
        return (this.alto + this.ancho) * 2;
    }

    getArea() {
        return this.alto * this.ancho;
    }
    getAlto() {
        return this.alto;
    }

    getAncho() {
        return this.ancho;
    }
    modificar(nuevoAlto, nuevoAncho) {
        this.alto = nuevoAlto;
        this.ancho = nuevoAncho;
    }
}

let rectangulos = [];

const form = document.querySelector('form');
const altoInput = document.querySelector('#alto');
const anchoInput = document.querySelector('#ancho');
const crearBtn = document.querySelector('#crear');
const modificarBtn = document.querySelector('#modificar');
const mostrarBtn = document.querySelector('#mostrar');
const mostrarTodosBtn = document.querySelector('#mostrar-todos');

crearBtn.addEventListener('click', () => {
    const nuevoAlto = parseInt(altoInput.value);
    const nuevoAncho = parseInt(anchoInput.value);
    if (isNaN(nuevoAlto) || isNaN(nuevoAncho) || nuevoAlto <= 0 || nuevoAncho <= 0) {
        return document.getElementById("demo4").innerHTML = ("debe ingresar un numero valido");
    } else {
        const nuevoRectangulo = new Rectangulo(nuevoAlto, nuevoAncho);
        rectangulos.push(nuevoRectangulo);
        modificarBtn.disabled = false;
        mostrarBtn.disabled = false;
        mostrarTodosBtn.disabled = false;
        document.getElementById("demo4").innerHTML = ("ingreso los datos con exito!");
    }
});

modificarBtn.addEventListener('click', () => {
    const nuevoAlto = parseInt(altoInput.value);
    const nuevoAncho = parseInt(anchoInput.value);
    if (isNaN(nuevoAlto) || isNaN(nuevoAncho) || nuevoAlto <= 0 || nuevoAncho <= 0) {
        return document.getElementById("demo4").innerHTML = ("debe ingresar un numero valido");
    } else {
        rectangulos[rectangulos.length - 1].modificar(nuevoAlto, nuevoAncho);
        document.getElementById("demo4").innerHTML = ("modifico los datos con exito!");
    }
});

mostrarBtn.addEventListener('click', () => {
    const ultimoRectangulo = rectangulos[rectangulos.length - 1];
    alert(`El alto es ${ultimoRectangulo.alto}, el ancho es ${ultimoRectangulo.ancho}, perimetro ${ultimoRectangulo.getPerimetro()} y el area ${ultimoRectangulo.getArea()}`);
});

mostrarTodosBtn.addEventListener('click', () => {
    let mensaje = '';
    for (let i = 0; i < rectangulos.length; i++) {
        const rectangulo = rectangulos[i];
        mensaje += `Rectángulo ${i + 1}: Alto = ${rectangulo.alto}, Ancho = ${rectangulo.ancho}, perimetro ${rectangulo.getPerimetro()} y el area ${rectangulo.getArea()}\n`;
    }
    alert(mensaje);
});



