const res = require("express/lib/response");

const platos = [
    "arroz con pollo",
    "encebollado",
    "ceviche"
];

function promesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos);
        }, 4000);
    });
}
promesa().then((res) => {
    console.log("DATOS", res);
});
const otrosPlatos = [
    "tigrillo",
    "jugos",
    "bolob"
];
//console.log(platos("ceviche"));

const union = [
    ...platos, ...otrosPlatos
];
console.log(union);