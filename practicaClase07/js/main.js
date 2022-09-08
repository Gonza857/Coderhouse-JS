/* metodos de busquedad 
FOR EACH ////
trabaja sobre un array y ejecuta una funcion.
Primero el array que queremos trabajar y luego el metodo. Por parametro le damos la funcion que queremos hacer.

FIND ////
va a buscar lo que yo quiera 
SOLO TRAE EL PRIMERO QUE ENCUENTRA

FILTER////
trae todos los que hay, aunque haya 1 solo, trae 1 array

SOME /////
en ves de traer me dice si existe o no. Boolean

REDUCE /////
especia de acumulador, retorna 1 valor. Resume
necesita 2 parametros

SORT /////
ordenar
*/

// SCOPE DE VARIABLES

// METODO REDUCE


// function mayorQue (num1) {
//     // guarda el parametro en num1
//     return (num2) => num2 > num1; //aca se guarda
// }

// let mayorQueDiez = mayorQue(n);

// // ese num1, ya queda guardado. Cuando damos el otro parametro, se guarda en num2

// // mayorQueDiez = (num2) => {num2 > num1};

// function mayorQue (10) {
//     // guarda el parametro en num1
//     return (num2) => num2 > 10; //aca se guarda
// }

// let mayorQueDiez = mayorQue(20);
// // el 20 puesto arriba, se guarda aca abajo

// mayorQueDiez = (20) => {20 > 10};
// // devuelve true
// ---------------------------------
// function porCadaUno (array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento);
//     }
// }

// let numeros = [5,8,20,44];
// porCadaUno(numeros, console.log);

// seria como

// funcion porCadaUno (numeros , console.log) {
//     for (const cadaNumeroDeNumeros of numeros) {
//         console.log(cadaNumeroDeNumero);
//     }
// }

let listaDeAutos = [{
        marca: "volkswagen",
        precio: 1000
    },
    {
        marca: "ford",
        precio: 900
    },
    {
        marca: "fiat",
        precio: 500
    },
    {
        marca: "volvo",
        precio: 2000
    },
    {
        marca: "honda",
        precio: 1500
    },
];

listaDeAutos.forEach(producto => {
    console.log(`este ${producto.marca} cuesta ${producto.precio}`)
});
// hace log en la consola de cada producto

let buscar = listaDeAutos.find( auto =>  auto.marca == "ford"  );
// devuelve "ford"

let buscar2 = listaDeAutos.find( auto =>  auto.precio <= 500);
// devuelve algun precio de algun auto que sea menor o igual a 500

let buscar3 = listaDeAutos.filter( auto =>  auto.precio <= 1000);
// devuelve objetos volkswagen, for y fiat en ARRAY

let buscar4 = listaDeAutos.some( auto =>  auto.precio <= 1000);
// devuelve true si existe, sino false

let buscar5 = listaDeAutos.map( auto => {
    return {
        marca: auto.marca,
        precio: auto.precio * 1.10
    }
});
// aumentos un 10 porciento el precio a todo, por ejemplo.

let buscar6 = listaDeAutos.reduce((acumulador, auto) => acumulador + auto.precio, 0);
// acumula los precios y retorna 1 valor

let marcasAutos = ["volkswagen", "ford", "volvo", "chevrolet", "fiat", "bmw"];
let ordenar = marcasAutos.sort()
// ordena alfabeticamente. MODIFICA ARRAY ORIGINAL

let numerosNuevos = [40,5,3,200];
// agarra 2 elementos y los compara. compara todos con todos. si es menor -1, mayor 1, igual 0.
console.log(numerosNuevos.sort((a,b) => a - b)) // de menor a mayor
console.log(numerosNuevos.sort((a,b) => b - a)) // de mayor a menor

listaDeAutos.sort((a,b) => {
    if (a.marca > b.marca) {
        return 1;
    }
    if (a.marca < b.marca) {
        return -1;
    }
    return 0;
})
// ordena alfabeticamente las marcas de autos





