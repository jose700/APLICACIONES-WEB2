let prueba = "555";
const persona = {
    nombre: " jose",
    apellido: "campuzano",
    esEstduiante: true,
    prueba: prueba,
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    Geolocation: {
        lat: 14.123,
        lng: 11.234,
    }
};

function mostrarDatos({ nombre, Geolocation: { lat, lng } }) {
    console.log(nombre);
    console.log(lat);
    console.log(lng);
}
mostrarDatos(persona);
//console.log(persona);
//console.log(persona.getNombreCompleto());
/*const estudiante = {
    nombre: persona.nombre,
    apellido: persona.apellido
};
const estudiante = {
    ...persona,
}
estudiante.nombre = "steven";
console.log(estudiante);
console.log(persona);*/