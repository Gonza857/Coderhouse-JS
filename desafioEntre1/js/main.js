// promediar nota de materia para el trimestre
// mostrar ese promedio

// variables
let alumno = prompt("Nombre y apellido del alumno");
let materia = prompt("¿Que materia es?");

// realiza el promedio
function promediar (nota) {
    let promedio = parseInt(nota / 4);
    return promedio;
}

// pregunta las notas
function preguntarNotas () {
    let nota1 =parseInt(prompt("Dame la primera nota"));
    let nota2 =parseInt(prompt("Dame la segunda nota"));
    let nota3 =parseInt(prompt("Dame la tercera nota"));
    let nota4 =parseInt(prompt("Dame la cuarta nota"));
    let notas = nota1 + nota2 + nota3 + nota4;
    console.log(notas);
    return notas;
}
// guardo el valor de la funcion
let promedioTotal = promediar(preguntarNotas());

// bucle para registrar alumnos (objetivo a trabajar en futuras clases para guardar los datos de cada alumno o cargar sus datos y no sobreescribirlos)
let entrada;
while ((entrada != "esc") && (entrada != "ESC") && (entrada != "Esc")) {
    let alumno = prompt("Nombre y apellido del alumno");
    let materia = prompt("¿Que materia es?");
    promedioTotal = promediar(preguntarNotas());
    // salida de resultado
    alert(`El alumno ${alumno} tiene un promedio de ${promedioTotal} en ${materia}`);
    entrada = prompt("Escribe ESC si deseas salir");
}