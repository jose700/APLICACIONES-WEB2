class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre,
            this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
const persona = new Persona("jose", "campuzano");
const datos = persona.getNombreCompleto();
console.log(datos);