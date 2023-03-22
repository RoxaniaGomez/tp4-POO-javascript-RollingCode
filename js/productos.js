class producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    getCodigo() {
        return this.codigo;
    }

    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }

}

let productos = [];

const form2 = document.querySelector('#formProductos');
const codigoImput = document.querySelector('#codigo');
const nombreImput = document.querySelector('#nombre');
const precioImput = document.querySelector('#precio');
const crearBoton = document.querySelector('#crearProductos');
const mostrarTodosBoton = document.querySelector('#mostrar-Productos');

crearBoton.addEventListener('click', () => {
    if (productos.length >= 3) {
        mostrarTodosBoton.disabled = false;
        crearBoton.disabled = true;
    }
    const codigoImput = parseInt(codigo.value);
    const nombreImput = nombre.value;
    const precioImput = parseInt(precio.value);
    if (isNaN(codigoImput) || isNaN(precioImput) || codigoImput <= 0 || precioImput <= 0) {
        return document.getElementById("demo5").innerHTML = ("debe ingresar un numero valido");
    } else {
        const nuevoProducto = new producto(codigoImput, nombreImput, precioImput);
        productos.push(nuevoProducto);

        document.getElementById("demo5").innerHTML = ("ingreso el producto" + (productos.length));
    }
    if (productos.length >= 3) {
        mostrarTodosBoton.disabled = false;
        crearBoton.disabled = true;
    }

});



mostrarTodosBoton.addEventListener('click', () => {
    let mensaje = '';
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        mensaje += `Producto ${i + 1}: Codigo = ${producto.codigo}, Nombre = ${producto.nombre}, precio = ${producto.precio}<br>`;
    }
    document.getElementById("demo5").innerHTML = (mensaje);
});






