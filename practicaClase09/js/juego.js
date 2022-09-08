const desaparecer = document.getElementById("desaparecer");
const jugador = document.getElementById("jugador")

const tecla = {
    izquierda: 37,
    arriba: 38,
    derecha: 39,
    abajo: 40
}

const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top: 0,
    left: 0
}

// para desaparecerlo
desaparecer.onclick = () => {
    if (estadoJugador.mostrar) {
        jugador.style.opacity = 0;
        estadoJugador.mostrar = false;
    } else {
        jugador.style.opacity = 1;
        estadoJugador.mostrar = true;
    }
}

// mover jugador
const mover = (e) => {
    switch (e.keyCode) {
        case tecla.arriba:
            estadoJugador.top -= estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break; 
        case tecla.abajo:
            estadoJugador.top += estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case tecla.derecha:
            estadoJugador.left += estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        case tecla.izquierda:
            estadoJugador.left -= estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        default: 
            alert(`Solo podes apretar las flechas PA`)
            break;
    }
}

// window, como document. pero aplica a toda la ventana
window.addEventListener("keydown", mover);