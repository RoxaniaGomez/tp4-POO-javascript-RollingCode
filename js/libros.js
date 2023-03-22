class Libro {
    constructor(isbn, titulo, autor, numeroDePaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    getisbn() {
        return this.isbn;
    }

    setisbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }

    gettitulo() {
        return this.titulo;
    }

    settitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    getautor() {
        return this.autor;
    }

    setautor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    getnumeroDePaginas() {
        return this.numeroDePaginas;
    }

    setnumeroDePaginas(nuevoNumeroDePaginas) {
        this.numeroDePaginas = nuevoNumeroDePaginas;
    }
    mostrarLibro() {
        return "<br> El libro " + this.titulo + " con ISBN " + this.isbn + " creado por el autor " + this.autor + " tiene " + this.numeroDePaginas + " paginas ";

    }
}


let libros = [];

const formLibros = document.querySelector('#formLibros');
const verLibros = document.querySelector('#verLibros');
let mensaje = " ";
let libroMasGrande = "";
let mayor = 0;
verLibros.addEventListener('click', () => {

    let libro1 = new Libro(978950, "Aleph", "Paulo Coelho", 274);
    libros.push(libro1);
    let libro2 = new Libro(421645, "A la puta que se llevo mis poemas", "Charles Bukowsky", 148);
    libros.push(libro2);
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        mensaje += (libro.mostrarLibro());
        if (libro.getnumeroDePaginas() > mayor) {
            mayor = libro.getnumeroDePaginas();
            libroMasGrande = libro.gettitulo();
        }
    }
    mensaje += ("<br> el libro con mayor cantidad de paginas es " + libroMasGrande + " con " + mayor + " paginas");
    document.getElementById("mostrarLibros").innerHTML = (mensaje);
});
