const libros = [{
        id: 1,
        titulo: "Node js Aplicaciones distribuidas",
        idautor: 1
    },
    {
        id: 2,
        titulo: "Codigo limpio",
        idautor: 2
    },
    {
        id: 3,
        titulo: "Patrones de diseño con Javascript",
        idautor: 22
    },

];
const autores = [{
        id: 1,
        nombre: "jose"
    },
    {
        id: 2,
        nombre: "luis"
    },
    {
        id: 3,
        nombre: "Campuzano"
    }
];

async function buscarLibroPorId(id) {
    const libro = libros.find((libro) => libro.id === id);
    if (!libro) {
        const error = new Error();
        error.message = "No encontramos el libro";
        throw error;
    }
    return libro;
}
async function BuscarAutoresPorId(id) {
    const autor = autores.find((autor) => autor.id === id);
    if (!autor) {
        const error = new Error();
        error.message = "No encontramos el autor";
        throw error;
    }
    return autor;
}
async function main() {
    try {
        const libro = await buscarLibroPorId(25);
        const autor = await BuscarAutoresPorId(libro.idautor);
        console.log(libro);
        console.log(autor);
    } catch (error) {
        console.log(`${error}`);
    }
}
main();