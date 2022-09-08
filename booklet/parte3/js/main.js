//parte 3

// actividad 1
// let texto = prompt("Dame un texto");
// let num = parseInt(prompt("Cuantas veces queres repetirlo?"));
// for (let i = 0; i < num; i++) {
//     let res = texto;
//     console.log(texto);
// }

// actividad 2
// let num = parseInt(prompt("Dame un numero"));
// for (let i = 1; i <= 4; i++) {
//     console.log(`${i} lados`);
// }

//actividad 3 
// for (let i = 1; i <= 10; i++) {
//     let alumnos = prompt(`Dame el nombre del alumno ${i}`)
//     document.write(`${i}) ${alumnos} <br>`);
// }

// actividad 4
// let nombres = prompt("Dame nombres")
// while (nombres != "Voldemort") {
//     nombres = prompt(`Dame nombres`)
//     console.log(nombres);
// }

// actividad 5
// let num = prompt("Del 1 al 4");
// while (num != "ESC") {
//     switch (num) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("solo del 1 al 4");
//             break;
//     }
//     num = prompt("Del 1 al 4");
// }

function even_or_odd(number) {
    number = parseInt(prompt("Give me a number"));
    let res = number % 2
    if (res == 0) {
    return "Even";
    } else {
    return "odd"
    }
}
let resultado = even_or_odd();

