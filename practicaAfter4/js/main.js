let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

// 1) FUNCION QUE RETORNE LA CANTIDAD DE DIAS DE LA SEMANA
// const func1 = () => {
//     let diasCant = diasSemana.length;
//     return diasCant;
// }
// console.log(func1())

// 2) FUNCION QUE DEVUELVA EL PRIMER DIA DE LA SEMANA
// const func2 = () => {
//     let primerDia = diasSemana.shift()
//     return primerDia;
// }
// console.log(func2());

// 3) FUNCION QUE DEVUELVA EL ULTIMO DIA DE LA SEMANA
// const func3 = () => {
//     let primerDia = diasSemana.pop()
//     return primerDia;
// }
// console.log(func3());

// 4) FUNCION QUE RECIBA COMO PARAMETRO UN DIA Y ME DIGA SI ES DIA DE SEMANA O DE FIN DE SEMANA
// let pregunta = prompt("Dame un dia").toLowerCase();
// const func4 = (pregunta) => {
//     let respuesta;
//     if (pregunta == "domingo" || pregunta == "sabado") {
//         respuesta = (`El día ${pregunta} es dia de fin de semena.`);
//     } else if (pregunta == "lunes" || pregunta == "martes" || pregunta == "miercoles" || pregunta == "jueves" || pregunta == "viernes") {
//         respuesta =(`El día ${pregunta} es dia de semana.`);
//     } else {
//         respuesta = `El dia indicado no existe`
//     }
//     return respuesta
// }
// console.log(func4(pregunta));

// 5) FUNCION QUE AGREGUE PERSONAS AL FINAL DE UNA LISTA Y SAQUE DE LA PRIMERA
// let personas = [];
// const agregar = () => {
//     let agrego = prompt("Nombre de la persona a agregar");
//     personas.push(agrego)
// }
// const sacar = () => {
//     personas.shift()
// }

// 6) FUNCION QUE ELIMINE JUEVES Y VIERNES
// let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// const borrarDias = () => {
//     let cual = prompt("¿Que dia queres borrar?").toLowerCase();
//     let indice;
//     let borrado;
//     switch (cual) {
//         case "lunes":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "martes":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "miercoles":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "jueves":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "viernes":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "sabado":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         case "domingo":
//             indice = diasSemana.indexOf(cual);
//             console.log(indice);
//             borrado = diasSemana.splice(indice, 1);
//             console.log(borrado);
//             console.log(diasSemana);
//             break;
//         default:
//             console.log(`El dia ${cual} no existe`)
//     }
// }

// 7) FUNCION QUE ME SUME UN MES EN EL MEDIO
// let meses = ["enero", "marzo", "abril", "mayo"];
// const agregarMes = () => {
//     meses.splice(1, 0, "febrero");
//     console.log(meses)
// }

// 8) FUNCION QUE ME DEVUELVA JUEVES Y VIERNES
// LA INVENTE YO, BUSCA EL DIA Y TE DICE SI EXISTE
// const yoBuscoDia = () => {
//     let searchDay = prompt("¿Que dia buscas?");
//     let existe = diasSemana.includes(searchDay);
//     console.log(existe);
//     let encontrado;
//     if (existe == true) {
//         encontrado = `El dia buscado existe y es ${searchDay}`;
//     } else {
//         encontrado = `No existe ese dia`
//     }
//     return encontrado
// }
// BUSCA JUEVES Y VIERNES Y LOS MUESTRA
// const juevesViernes = () => {
//     let indiceJueves = diasSemana.indexOf("jueves");
//     let indiceViernes = diasSemana.indexOf("viernes") + 1;
//     console.log(indiceJueves);
//     console.log(indiceViernes);
//     console.log(diasSemana.slice(indiceJueves, indiceViernes));
// }

// 9) BUSCAR EN EL ARRAY SI EXISTE UN ANIMAL, SI NO EXISTE AGREGARLO.
// let animales = ["vaca", "mono", "gallina"];
// const agregarAnimales = () => {
//     let buscar = prompt("¿Que animal buscas?").toLowerCase();
//     let incluyeAnim = animales.includes(buscar);
//     if (incluyeAnim == false) {
//         animales.push(buscar);
//         console.log(`El ${buscar} ha sido agregado`)
//         console.log(animales)
//     } else {
//         console.log(`El ${buscar} ya existe`)
//     }
// }

// 10) FUNCION QUE INVIERTA EL ORDEN DE UN ARRAY
// let invertido = animales.reverse();
// console.log(invertido)

// SIN USAR .REVERSE()
const revertirForOf = (array) => {
    let newArray = [];
    for (const value of array) {
        newArray.unshift(value)
    }
}

// 11) FUNCION QUE SUME OBJETOS A UN ARRAY
let objetos = [];
class Objeto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
const crearObjeto = () => {
    let nombre = prompt("nombre del objeto");
    let precio = parseInt(prompt("precio del objeto"));
    let objetoNew = new Objeto (nombre,precio);
    objetos.push(objetoNew);
    let pregunta = prompt("¿desea ver los objetos?");
    if (pregunta == "si") {
        console.log(objetos);
    }
}

