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
const paises = [{

}];

function buscarLibroPorId(id, callback) {
    const libro = libros.find((libro) => libro.id === id);
    //return libro.id === id;

    if (!libro) {
        const error = new Error();
        error.message = "Libro no encontrado";
        return callback(error);
    }
    return callback(null, libro);
    //return libro;
}
buscarLibroPorId(3, (err, libro) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(libro);

});
// autor
/*function buscarAutorPorId(id, callback) {
    const autor = autores.find((autor) => autor.id === id);
    //return libro.id === id;

    if (!autor) {
        const error = new Error();
        error.message = "Autor no encontrado";
        return callback(error);
    }
    return callback(null, autor);
    //return libro;
}
buscarAutorPorId(libro.idautor, (err, autor) => {
    if (err) {
        console.log(err.message);
        return;
    }
    delete libro.idautor;
    console.log(autor);

});*/