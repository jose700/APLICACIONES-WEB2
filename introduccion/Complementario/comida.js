//Definir un arreglo con sus comidas favoritas. 
const comida = [
    "Ceviche",
    "Encebollado",
    "Sopa de gallina criolla",
    "Pescado apanado"
];

//Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
function mostrar() {
    let i = 0;
    do {
        i = i + 1;
    } while (i <= 5);

    console.log(`${comida[0]} ${comida[1]}${comida[2]}${comida[3]}`);
    //
}
mostrar();
/* Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en 
mayúscula*/
const mayuscula = (comida) => {
    return `Mi comida favorita es: ${comida}`;

};
console.log(comida[0].toUpperCase());
