let presupuesto = prompt("¿Cuanto vas a gastar?");
let descuento = prompt("¿Cuanto descuento se le va a aplicar? Especifique en porcentaje");

let resultado = presupuesto / 100 * descuento;
alert(`Usted va a pagar $${resultado}`);