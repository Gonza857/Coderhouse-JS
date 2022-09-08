const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

// 3 formas de escuchar eventos
// 1 - metodo addEventListener(EVENTO, FUNCION);
//boton.addEventListener("click",escribir);
// boton.addEventListener("click",()=>{
//     escribir();
// });


// 2 - forma reducida el evento es metodo
// boton.onclick = ()=>{escribir()}

//TIPOS DE EVENTOS
// EVENTOS MECANICOS
// 1 - mouse - mouseover, mouseout, mousemove

// boton.addEventListener("mousemove",()=>{
//     console.log("hola");
// })

// 2 - teclado - keydown keyup
const text = document.querySelector("#texto");
// text.onkeyup = () => {
//     console.log(text.value.length);
// }

// EVENTOS DE LOGICA - change - registra el cambio cuando salimos de foco
// input
text.addEventListener("keydown",(e)=>{
    console.log(`el nuevo valor es: ${e.keyCode}`);
})

const select = document.querySelector("#select");
select.addEventListener("change", ()=>{
    console.log(`el usuario eligio la opcion ${select.value}`);
})

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(e.target);
})

const link = document.querySelector("a");
link.onclick = (e) => {
    e.preventDefault();
    console.log(e.target);
}