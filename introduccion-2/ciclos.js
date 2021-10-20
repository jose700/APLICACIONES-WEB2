const frutas = [
    "manzana", "pera", "guineo"
];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// cilcos utilizando of
const frutas2 = [
    "manzana", "pera", "guineo"
];
for (const fruta of frutas2) {
    console.log(`esto es una fruta ${fruta}`);
}