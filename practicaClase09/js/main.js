// ---------- EVENTOS ----------
//  SON LA MANERA DE CONTROLAR LAS ACCIONES DE LOS USUARIOS Y DEFINIR UN COMPORTAMIENTO DE LA PAGINA PARA CUANDO SE PRODUZCAN
// POR EJEMPLO CUANDO EL USUARIO HACE HOVER, CLICK, MOUSE, TECLADO.
// ESCUCHAMOS LOS EVENTOS - event listener

const parrafo = document.querySelector("#parrafo");
const btn = document.querySelector("#btn");

const escribir = () => {
    let texto = prompt("dame un texto");
    // PODEMOS USAR .textContent
    parrafo.textContent = texto;
}

// ---------- 3 FORMAS DE ESCUCHAR EVENTOS ----------

// 1) Metodo addEventListener(evento, funcion)
// btn.addEventListener("click", escribir);
// TAMBIEN SE PUEDE DEFINIR LA FUNCION DENTRO
// btn.addEventListener("click", () => {
//     parrafo.innerText = "hola soy un parrafo";
// });

// 2) Forma reducida, el evento es el metodo
// btn.onclick = () => escribir();

// 3) SE PUEDE PONER EN HTML, PERO NO ES BUENA PRACTICA. ES MALA PRACTICA COMO ESCRIBIR EL ESTILO EN LINEA

// ---------- TIPOS DE EVENTOS ----------

// EVENTOS MECANICOS - son aquellos donde el usuario debe hacer un acto mecanico para que lo podamos escuchar, mover mause, hacer click, usar el teclado, etc.

// 1) Mouse - mouseover (como hover), mouseout, mousemove

// mousehover: cuando entra el mouse, lo registra
// mouseout: cuando sacamos el mouse, lo registra
// mousemove: movemos el mouse dentro del elemento y registra 
// mousedown: cuando soltamos el click sobre un elemento
// mouseop: cuando apretamos el raton sobre un elemento
// dblclick: ?

// btn.addEventListener("mouseover",() => {
//     console.log("hola")
// });
// btn.addEventListener("mouseout",() => {
//     console.log("hola")
// });
// btn.addEventListener("mousemove",() => {
//     console.log("hola")
// });

// 2) Teclado - keydown, keyout
// keydown es cuando apreto
// keyout es cuando suelto

let texto = document.getElementById("texto");
// texto.onkeyup = () => {
//     console.log(texto.value)
// }

// EVENTOS DE LOGICA - eventos en donde tenemos cierto cambio o algo que pasa

// change - input: registran cualquier cambio en el elemento que vemos, si escribimos, cualquier cosa que cambie.

// input cambia a medida que escribimos
// change cambia cuando nos salimos del foco del input o damos enter

// texto.addEventListener("change", () => {
//     console.log(`El nuevo valor es ${texto.value}`)
// })
// texto.addEventListener("input", () => {
//     console.log(`El nuevo valor es ${texto.value}`)
// })

// change tiene otro uso
const select = document.querySelector("#select");
select.addEventListener("change", ()=> {
    console.log(`El usuario elegio la ${select.value}`)
})
// si ponemos value al option, es lo que lee javascript

// SUBMIT
// Se activa cuando enviamos el formulario 
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    // previene el comportamiento por default
    console.log(e.target)
})
// el formulario refresca la pagina cuando enviamos
// tiene un coportamiento POR DEFAULT
// por ejemplo las etiquetas <a></a> tiene comportamiento por default de mandarnos a otra pagina
// preventDefault()

const link = document.querySelector("a")
link.onclick = (e) => {
    e.preventDefault();
    console.log("frene el comportamiento")
}

// CUANDO TOCAMOS LA TECLA NOS DICE EL NUMERO DE TECLA ASCII 
texto.addEventListener("keydown", (e) => {
    console.log(`El nuevo valor es ${e.keyCode}`)
})

// target me ayuda a ver donde estoy parado, es algo parecido al this
// por ejemplo a que le hicimos click