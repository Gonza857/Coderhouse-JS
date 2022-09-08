/* 
Funcion: conjunto de instrucciones que se agrupan para realizar una tarea concreta, que luego se puede reutilizar a lo largo de distintas partes del codigo.

YAGNI
KISS
DRY

function nombreFuncion() {
    sentencias
}
nombreFuncion ();

function saludar () { //la declaramos y escribimos la sentencia
    alert("Hola!")
}
saludar(); //la llamamos

PARAMETROS

funcion nombre (parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
}
nombre(1,2) //se guarda en parametro1 y parametro2

*/

// ---------------------------------------------

// let number1 = prompt("Dame el primer numero");
// let number2 = prompt("Dame el segundo numero");
// let operacion = prompt("Que operacion deseas realizar")

// function sumar (number1, number2) {
//     let resultado = number1 + number2;
//     return resultado;
// }
// function restar (number1, number2) {
//     let resultado = number1 - number2;
//     return resultado; //devuelve un resultado, si no lo ponemos, no podemos usar el resultado afuera.
// }

// switch (operacion) {
//     case "+":
//         sumar(number1,number2);
//         break;
//     case "-":
//         restar(number1,number2);
//         break;
//     default:
//         console.log("ingresaste algo invalido");
// }

// console.log(resultado);

// FUNCION

// function nombre (parametros) {
//     codigo;
//     return; //devuelve un resultado, si no lo ponemos, no podemos usar el resultado afuera.
// }

// SCOPE
// si se declara afuera, es global, podemos cambiar el nombre adentro.
// si la declaramos dentro de una funcion, solo existe adentro. Si la llamamos afuera, nos va a decir que es "undefined".
// si declaramos una variable afuera, y otra adentro, van a ser distintas.
// si queremos que retorne el resultado de la funcion para mostrarla afuera, usamos return.
// VAR, no tiene scope. Es siempre global

// SWITCH
// switch (variable a analizar) {
//     case "si es x":
//         codigo;
//         break;
//     case "si es x":
//         codigo;
//         break;
//     default:
//         lo que hace no se cumple los case;
// }

// FUNCION ANONIMA
// Funcion sin nombre
// Se usa para ser pasada como parametro o asiganada a una variable
// const nombre = (parametro) => {codigo}

// funcion que acepte un numero y diga si es primo o No
// primo por 1 y por si mismo
const primos = (num) => {
    let contador = 0;
    for (let i = 1; i <= num; i++) {
        if ((num % i) == 0) {
            contador++;
        }
    }
    if (contador > 2) {
        num = "No es Primo";
    } else {
        num = "Es primo"
    }    
    return num
}
let num = parseInt(prompt("Dame un numero"));
console.log(primos(num));

