/* OBJETOS
Coleccion de datos relacionados a una entidad. Listado par clave-valor.
Se separan los clave-valor por comas (",")

let objeto = {
    propiedad: "string",
    propiedad2: number,
    propiedad3: boolean
}

*/

//OBJETO LITERAL (literalmente escrito o codeado)

let mascota1 = {
    nombre: "laly",
    edad: 8,
    genero: "femenino",
    castrado: true,
    duenio: {
        nombre: "Gonzalo",
        direccion: "Pasteur 1791",
    }
}
console.log(mascota1);

/*Como acceder a la propiedad, 2 formas.
1) con [] - ES5
mascota1["propiedad"]

2) Con objeto.propiedad - ES6
mascota1.nombre

CAMBIAR VALORES ASIGNADOS

objeto.propiedad = valorNuevo
mascota1.castrado = false;

ACCEDER A PROPIEDAD DE OBJETO DE OBJETO

mascota1.duenio.dirección


OBJETO CONSTRUCTOR /////
Usamos funcuion constructora
El nombre empieza con mayuscula.
Creamos propiedades y valores.
Entre () van los datos que recibimos cuando la llamamos

fuction Nombre (nombre, edad, calle) {
    this.nombre = nombre>; va el nombre que damos
    this.edad = edad; va la edad que vamos
    this.calle = calle; va la calle que damos
}

THIS relaciona al objeto en el que vamos a estar en ese momento
This hace que el valor que agregamos se agregue a 1 objeto, no a todos. Ayuda a decirle que esto es sobre la propiedad del objeto especifico que estoy actuando.
Ese valor se lo estamos agregando a algo espeficio. 
Si no estuviera, todos los objetos tendrian el mismo nombre.

*/

function Mascota (nombre, edad, genero, raza, castrado, duenio) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.raza = raza;
    this.castrado = castrado;
    this.duenio = duenio;
}

/*
COMO HACERLA FUNCIONAR
Usamos "new", sabe que creamos un objeto
const nombre = new nombreConstructor ("string", number, true);
*/

const lila = new Mascota("Lila", 8, "femenino", "callejero", true, "Toledo");
console.log(lila);

// pedirle todo al usuario

let nombreMascota = prompt("¿Cual es el nombre de tu mascota?");
let edadMascota = parseInt(prompt("¿Cual la edad de tu mascota?"));
let generoMascota = prompt("¿Cual es el genero de tu mascota?");
let razaMascota = prompt("¿Cual la raza de tu mascota?");
let castradoMascota = prompt("¿Esta castrada tu mascota?");
let duenoMascota = prompt("Nombre del dueño");

const manchi = new Mascota(nombreMascota, edadMascota, generoMascota, razaMascota, castradoMascota, duenoMascota);
console.log(manchi);

/* CONVERTIR EL "si" a boolean
let castradoBoolean;
if (castradoMascota == "si") {
    castradoBoolean = true;
} else {
    castradoBoolean = false;
}

luego cambiamos castradoMascota por castradoBoolean

*/








