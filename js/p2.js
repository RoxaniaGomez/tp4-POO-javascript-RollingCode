
/*
Crea un objeto cuenta con las propiedades titular,saldo y
 los metodos ingresar(), extraer() e informar()
*/

let cuenta = {
    // propiedades -> clave: valor;
    titular: 'Alex',
    saldo: 0,
    //metodos
    ingresar: function () {
        let cantidad = parseInt(prompt("cuento dinero desea ingresar?"));
        if (isNaN(cantidad) || cantidad <= 0) {
            return document.getElementById("demo3").innerHTML = ("debe ingresar un numero valido");
        } else {
            this.saldo += cantidad;
            return document.getElementById("demo3").innerHTML = (this.titular + " ha ingresado a su cuenta " + cantidad + " su saldo total es de " + this.saldo);
        }
    },
    extraer: function () {
        let cantidad = parseInt(prompt("cuento dinero desea extraer?"));
        if (isNaN(cantidad) || cantidad > this.saldo) {
            return document.getElementById("demo3").innerHTML = ("No hay suficiente saldo en la cuenta");

        } else {
            this.saldo -= cantidad;
            return document.getElementById("demo3").innerHTML = (this.titular + " ha extraido de su cuenta " + cantidad + " su saldo total es de " + this.saldo);
        }


    },
    informar: function () {

        return document.getElementById("demo3").innerHTML = (this.titular + " su saldo total es de " + this.saldo);

    }
}