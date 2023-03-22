

class Persona {
    constructor(nombre, edad, dni, peso, altura, anio_nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.peso = peso;
        this.altura = altura;
        this.anio_nacimiento = anio_nacimiento;
    }

    // Getter para el nombre
    getNombre() {
        return this.nombre;
    }

    // Setter para el nombre
    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Getter para la edad
    getEdad() {
        return this.edad;
    }

    // Setter para la edad
    setEdad(edad) {
        this.edad = edad;
    }

    setDni(Dni) {
        this.dni = Dni;
    }

    getDni() {
        return this.dni;
    }

    setPeso(Peso) {
        this.Peso = Peso;
    }
    getPEso() {
        return this.peso;
    }
    setAltura(Altura) {
        this.altura = Altura;
    }
    getAltura() {
        return this.altura;
    }
    setAnioDeNac(AnioDeNac) {
        this.anio_nacimiento = AnioDeNac;
    }
    getAnioDeNac() {
        return this.anio_nacimiento;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return ("Es mayor de edad \n");
        }
        else {
            return ("Es Menor de edad /n ");
        }
    }
    generaDNI() {
        this.dni = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        return ("nuevo :" + this.dni);
    }

    mostrarGeneracion() {
        let resultado = 2023 - this.edad;
        let mensaje = '';

        mensaje += ("DATOS INGRESADOS \n Nombre: " + this.nombre + "\n Edad: " + this.edad + "\n DNI " + this.generaDNI() + " \n Peso: " + this.peso + "\n Altura: " + this.altura + "\n año de nacimiento: " + this.anio_nacimiento + "\n " + this.esMayorDeEdad() + "y eres de la ");

        if (resultado <= 2010 && resultado >= 1994) {
            mensaje += (`generacion Z, gracias a la Expancion masiva de intener quizas sean un poco Irreverentes ("quizas") `)
        }
        else if (resultado <= 1993 && resultado >= 1981) {
            mensaje += (`generacion Y, nacieron en el inicio de la digitalizacion, Estan un poco frustrados`)
        }
        else if (resultado <= 1980 && resultado >= 1969) {
            mensaje += (`generacion X, nacieron en plena crisis, por eso tienen una gran obsesion por el exito`)
        }
        else if (resultado <= 1968 && resultado >= 1949) {
            mensaje += (`generacion Baby Boom, nacieron en una epoca de paz y expansion, son muy ambiciosos`)

        }
        else if (resultado <= 1948 && resultado >= 1930) {
            mensaje += (`generacion silent generacion(niños pos guerra), nacieron en pleno conflictos belicos, por eso son muy austeros`)

        }
        return window.alert(mensaje);
    }
}

const form3 = document.querySelector('#miFormulario');
const nombre = document.querySelector('#nombreg');
const edad = document.querySelector('#edadg');
const dni = document.querySelector('#dnig');
const peso = document.querySelector('#pesog');
const altura = document.querySelector('#alturag');
const anio = document.querySelector('#aniog');
const botonGeneracion = document.querySelector('#botonGeneracion');




botonGeneracion.addEventListener('click', () => {

    const nombre = nombreg.value;
    const edad = parseInt(edadg.value);
    const dni = parseInt(dnig.value);
    const peso = parseInt(pesog.value);
    const altura = parseInt(alturag.value);
    const anio = parseInt(aniog.value);

    let nuevaPersona = new Persona(nombre, edad, dni, peso, altura, anio);

    nuevaPersona.mostrarGeneracion();
});