// PRACTICA CLASE 01 JAVASCRIPT - 22/06/22;

const anioNacimiento = 2003;

let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Cual es tu apellido?");
let nombreCompleto = nombre + apellido;

// extension para ver lo que pasa en el codigo "quokka"

/*
convertir a numero

podemos usarlo en la asignacion de variable o cuando le damos la funcion promt y despues el parse

Number()  constructor
parseInt() convierte en enteros
parseFloat() convierte en decimales
*/

//string template, BACKSTICKS COMO EXPLICO DALTO

alert(`Tu nombre es ${nombre} y tu apellido es ${apellido}`);
