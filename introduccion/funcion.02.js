function operador(n1, n2, operador) {
    switch (operador) {
        case "sumar":
            return n1 + n2;
        case "restar":
            return n1 - n2;
        case "multiplicar":
            return n1 * n2;
        case "dividir":
            return n1 % n2;
        default:
            return 0;
    }
}

function saludar(nombre) {
    return `hola como estas ${nombre}`;
}
// exportar objeto literal
module.exports = {
    function1: operador,
    //function2: saludar,
    saludar,
    variable: 7
};