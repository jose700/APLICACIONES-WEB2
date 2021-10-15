function operador(n1, n2, operador) {
    switch (operador) {
        case "sumar":
            return n1 + n2;
            break;
        case "restar":
            return n1 - n2;
            break;
        case "multiplicar":
            return n1 * n2;
            break;
        case "dividir":
            return n1 % n2;
            break;
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