/*Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color.*/
class Mascotas {
    constructor(nombre, edad, color) {
        this.nombre = nombre,
            this.edad = edad,
            this.color = color;
    }
    getDatos() {
        return `su nombre es:${this.nombre} su edad es ${this.edad} años y su color es ${this.color}`;
    }
}
const mascotas = new Mascotas("LUCY", "3", "CAFÈ");
const datos = mascotas.getDatos();
console.log(datos);