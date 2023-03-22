
/*Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios
para permitir encender y apagar el auto.
*/

let sonidoEncendido = new Audio("../sound/encender.mp3");
let sonidoApagado = new Audio("../sound/apagar.mp3");
let auto = {
    // propiedades -> clave: valor;
    color: 'rojo',
    marca: 'fiat',
    modelo: '600',
    encedido: false,

    //metodos
    encender: function () {
        this.encedido = true;
        sonidoEncendido.play();
        document.getElementById("botonEncender").style.display = "none";
        document.getElementById("botonApagar").style.display = "initial";
        document.getElementById("imgEncendido").style.display = "initial";
        document.getElementById("imgApagado").style.display = "none";

        return document.getElementById("demo2").innerHTML = ("el auto esta encendido");
    },
    apagar: function () {
        this.encedido = false;
        sonidoEncendido.pause();
        sonidoApagado.play();
        document.getElementById("botonApagar").style.display = "none";
        document.getElementById("botonEncender").style.display = "initial";
        document.getElementById("imgEncendido").style.display = "none";
        document.getElementById("imgApagado").style.display = "initial";
        return document.getElementById("demo2").innerHTML = ("el auto esta apagado");
    },
    mostrar: function () {

        return document.getElementById("demo1").innerHTML = ("datos del auto<br>marca: " + this.marca + "<br>modelo: " + this.modelo + "<br>color: " + this.color);

    }
}

