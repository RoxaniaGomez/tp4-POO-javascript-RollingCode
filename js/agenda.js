class Agenda {
    constructor() {
        this.contactos = [];
        this.maxContactos = 10;
    }

    aniadirContacto(contacto) {
        if (this.contactos.length >= this.maxContactos) {
            document.getElementById("verTarea").innerHTML = ("La agenda está llena. No se puede agregar más contactos.");

            return;
        }
        this.contactos.push(contacto);

        document.getElementById("verTarea").innerHTML = ("Contacto ingresado con exito");
    }

    existeContacto(contacto) {
        return this.contactos.includes(contacto);
    }

    listarContactos() {
        console.log("Lista de contactos:");
        let dibujo = " ";
        this.contactos.forEach((contacto) => {
            console.log(`- ${contacto.nombre}: ${contacto.numero}`);
            dibujo += ("nombre: " + contacto.nombre + " numero: " + contacto.numero + "<br>");
        });
        document.getElementById("verTarea").innerHTML = (dibujo);
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find((c) => c.nombre === nombre);
        if (contacto) {
            return contacto;
        } else {
            document.getElementById("verTarea").innerHTML = (`No se encontró ningún contacto con el nombre ${nombre}.`);
            return "";
        }
    }

    eliminarContacto(contacto) {
        const index = this.contactos.indexOf(contacto);
        if (index !== -1) {
            this.contactos.splice(index, 1);
            console.log("Se ha eliminado el contacto de la agenda.");
        } else {
            document.getElementById("verTarea").innerHTML = ("El contacto no se encontró en la agenda.");
        }
    }

    agendaLlena() {
        if ((this.contactos.length >= this.maxContactos) == true) {
            document.getElementById("crearC").style.display = "none";
            document.getElementById("sinEspacio").style.display = "initial";
            document.getElementById("conEspacio").style.display = "none";
            document.getElementById("conEspacioTexto").innerHTML = ("No hay espacio en la agenda");
        }

    }

    huecosLibres() {
        if ((this.maxContactos > this.contactos.length) == true) {
            document.getElementById("crearC").style.display = "initial";
            document.getElementById("sinEspacio").style.display = "none";
            document.getElementById("conEspacio").style.display = "initial";
            document.getElementById("conEspacioTexto").innerHTML = ("hay espacio en la agenda");
        }
    }
}
const crearC = document.getElementById('crearC');
let nuevoContacto = new Agenda();
crearC.addEventListener('click', () => {
    const nombre = prompt('Ingrese el nombre del contacto:');
    const numero = prompt('Ingrese el número del contacto:');
    let contacto = { nombre, numero };
    nuevoContacto.aniadirContacto(contacto);

    nuevoContacto.agendaLlena();
    nuevoContacto.huecosLibres();
});
modificarc.addEventListener('click', () => {
    let nombre = prompt('Ingrese el nombre del contacto que desea modificar:');
    let contactoAeliminar = "";
    contactoAeliminar = nuevoContacto.buscarContacto(nombre);
    if (contactoAeliminar != "") {
        nuevoContacto.eliminarContacto(contactoAeliminar);
        nombre = prompt('Ingrese el nombre del contacto nuevo:');
        const numero = prompt('Ingrese el número del contacto nuevo:');
        let contacto = { nombre, numero };
        nuevoContacto.aniadirContacto(contacto);

        nuevoContacto.agendaLlena();
        nuevoContacto.huecosLibres();
    }

});
eliminarc.addEventListener('click', () => {
    let nombre = prompt('Ingrese el nombre del contacto que desea modificar:');

    let contactoAeliminar = nuevoContacto.buscarContacto(nombre);
    nuevoContacto.eliminarContacto(contactoAeliminar);
    nuevoContacto.agendaLlena();
    nuevoContacto.huecosLibres();
});
mostrarc.addEventListener('click', () => {

    nuevoContacto.listarContactos();
    nuevoContacto.agendaLlena();
    nuevoContacto.huecosLibres();
});

/*
 const agenda = new Agenda();
const contacto1 = { nombre: "Juan", numero: "555-1234" };
const contacto2 = { nombre: "Ana", numero: "555-5678" };

agenda.aniadirContacto(contacto1); 
agenda.aniadirContacto(contacto2); 
agenda.listarContactos(); 
agenda.buscarContacto("Juan"); 
agenda.buscarContacto("Pedro");
agenda.eliminarContacto(contacto2); 
agenda.listarContactos();
*/