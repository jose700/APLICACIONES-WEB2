//funcion normal estandar
console.log(prueba("Jose"));

function prueba(nombre) {
    return `Hola como esta ${nombre}`;
}
//funcion con constante
const saludar = function(nombre) {
    return `Hola como esta ${nombre}`;

};
console.log(saludar("Luis"));
// funcion flecha
const saludar2 = (nombre) => {
    return `Hola como esta ${nombre}`;
};

function mostrarSaludo(fn, parametro) {
    console.log(fn(parametro));
}
mostrarSaludo(saludar2, "Campuzano");