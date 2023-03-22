let juego = {
    // propiedades -> clave: valor;


    //metodos
    algoritmo: function () {
        var indice = Math.floor(Math.random() * 3);

        return indice;
    },
    piedra: function () {
        let res = this.algoritmo();
        document.getElementById("piedraUsuario").style.display = "initial";
        document.getElementById("papelUsuario").style.display = "none";
        document.getElementById("tijeraUsuario").style.display = "none";
        if (res == 0) {

            document.getElementById("piedraAlgoritmo").style.display = "initial";
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("Empate");

        } else if (res == 1) {

            document.getElementById("papelAlgoritmo").style.display = "initial";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("perdiste")
        } else {
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "initial";
            return document.getElementById("resultadoVictoria").innerHTML = ("ganaste");
        }


    },
    papel: function () {
        let res = this.algoritmo();
        document.getElementById("papelUsuario").style.display = "initial";
        document.getElementById("tijeraUsuario").style.display = "none";
        document.getElementById("piedraUsuario").style.display = "none";
        if (res == 0) {

            document.getElementById("piedraAlgoritmo").style.display = "initial";
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("ganaste");

        } else if (res == 1) {

            document.getElementById("papelAlgoritmo").style.display = "initial";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("empate")
        } else {
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "initial";
            return document.getElementById("resultadoVictoria").innerHTML = ("perdiste");
        }
    },
    tijera: function () {
        let res = this.algoritmo();
        document.getElementById("tijeraUsuario").style.display = "initial";
        document.getElementById("papelUsuario").style.display = "none";
        document.getElementById("piedraUsuario").style.display = "none";
        if (res == 0) {

            document.getElementById("piedraAlgoritmo").style.display = "initial";
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("perdiste");

        } else if (res == 1) {

            document.getElementById("papelAlgoritmo").style.display = "initial";
            document.getElementById("tijeraAlgoritmo").style.display = "none";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("ganaste")
        } else {
            document.getElementById("tijeraAlgoritmo").style.display = "initial";
            document.getElementById("papelAlgoritmo").style.display = "none";
            document.getElementById("piedraAlgoritmo").style.display = "none";
            return document.getElementById("resultadoVictoria").innerHTML = ("empate");
        }
    }
}

