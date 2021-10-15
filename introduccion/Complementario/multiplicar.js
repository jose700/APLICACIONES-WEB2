/*Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando 
recursividad*/


function multiplicar(n = 10) {


    for (i = 0; i <= n; i++) {
        console.log(n * i);
    }

}
multiplicar();