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
        idautor: 1,
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


function buscarLibroPorId(id) {
    return new Promise((resolve, reject) => {
        const libro = libros.find((libro) => libro.id === id);
        if (!libro) {
            const error = new Error();
            error.message = "El ibro no fue encontrado";
            reject(error);
        }
        resolve(libro);
    });
}

function buscarAutorPorId(id) {
    return new Promise((resolve, reject) => {
        const autor = autores.find((autor) => {
            return autor.id === id;
            //return autor.id ===libro.idautor
        });
        if (!autor) {
            const error = new Error();
            error.message = "Autor no encontrado";
            reject(error);
        }
        //libro.autor = autor;
        resolve(autor);
    });
}
//let libroAuxiliar = {};
buscarLibroPorId(2).then((libro) => {
    //  console.log(libro);
    return buscarAutorPorId(libro.idautor);
}).then((autor) => {
    console.log(autor);
    //libroAuxiliar.autor = autor;
    //delete libroAuxiliar.idautor;
    //console.log(libroAuxiliar);
}).catch((error) => {
    console.log(error.message);
});