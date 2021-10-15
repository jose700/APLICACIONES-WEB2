/*let num = "10";

for (i = 0; i < num; i++) {
    console.log(`el valor de I es: ${i}`);
}
if (num > 10 || num === 10) {
    console.log(num);
} else {
    console.log("vacio");
}*/
const { function1, variable } = require('./funcion.02');
let app = require('./funcion.02');
let saludo = app.saludar('ESPINAL');
console.log(saludo);
console.log(function1(2, 7, "sumar"));
console.log(function1(variable, 7, "sumar"));