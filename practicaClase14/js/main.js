/*  ////////// ASINCRONIA Y PROMESAS //////////

///// ASINCRONIA /////

    PROGRAMACION SINCRONICA
        Se ejecuta linea por linea, lineal.

    PROGRAMACION ASINCRONICA
        Cuando podemos hacer diferentes tareas a la vez.

        Ejecuta la primera peticion, la da
        Cuando tenga la segunda, la da.
        LO HACE PARALELAMENTE.

        VENTAJAS
            - Facilita la interaccion con el usuario.
                Por ejemplo iterar un array y incertarlo al HTML, si es mucho, se puede poner en segundo plano para que el usuario no espere.
        DESVENTAJAS
            - Dificultas de comprensión de programas

    setTimeout(fn, time);
        Realizar tarea en segundo plano.
        fn = funcion
        time = tiempo en Mili Segundos, MS.
        espera el tiempo indicado para llamar a la funcion
        EJEMPLO 
        */
        console.log("Primer paso");
        setTimeout(() => console.log("Segundo paso, despues de 5s"), 5000);
        console.log("Tercer paso");
        /*
        carga el primer y tercer paso y despues de 5 segundos ejectua el segundo.
        Mientras esperaba, ejecuto el resto en paralelo

    ---------- CALL STACK (PILA) ----------
        Amontonamiento de tareas, lista donde se apilan las tareas a ejecutar.
        JS es un lelnguaje single threaded, o unico hilo. Significa un unico staco de ejecucion, eso es sincronico.
    ---------- EVENT LOOP ----------
        Cuando tenemos una funcion asincronica, estas funciones se ejecutan en una pila o stack diferente. El event loop, hace que cada pila que hay, se sincronize para poder ir ejecutandose
        LOUPE - herramienta de visualizacion de call stack, event loop y callback queue.
    
    ENTONCES:
    Por más que hagamos el timeout con 0 milisegundos, éste se envía al stack de web apis primero, luego al callback queue, y finalmente el event loop lo incorpora al callstack para su ejecución, luego de los console.log anteriores.

    setInterval(fn, time);
        Misma sintaxis que el setTimeuot, pero ejecuta funciones despues de los MS indicados hasta que indiquemos su detencion o se cierre la aplicacion.
        O sea, ejecuta lo de adentro, entre cada linea tarda el tiempo que damos

    PODEMOS CORTAR EL INTERVALO Y EL TIMEOUT

    clearTimeout()
    clearInterval()

    EJEMPLO
        let counter = 0
        const interval = setInterval(() => {
            counter++
            console.log("Counter: ", counter)

            if (counter >= 5) {
                clearInterval(interval)
                console.log("Se removió el intervalo")
            }
        }, 1000)

///// PROMESAS /////
        Es un objeto de JS que representa a un evento a futuro. Es decir, una accion asincronica que se puede completar en algun momento y producir un valor y notificar cuando esto suceda
        Tiene 3 estados
        - Pending
        - Fullfilled
        - Rejectec
        Las promesas pueden ser resueltas o rechazadas

        CONSTRUCTOR
        
        new Promise ( (resolve, reject) ) => {
            // cuerpo de la promesa
        }
        el parametro es lo mismo lo que pognamos, pero el primero siempre es la resolucion, y el segundo el rechazo.

        new Error(); // tambien tiene su constructor el error

        EJEMPLO
        */
        const promesa = new Promise ((resolve,reject) => {
            let num = Math.floor(Math.random() * 10);
            setTimeout (() => {
                num > 5 ? resolve(console.log(num)) : reject(new Error("El numero obtenido es mayor a 5"))
            }, 2000)
        })
        /*
        Primero esta PENDING, esperando a resolverse, cuando esta resuelta es FULLFILLED o rebotada, REJECT
    
///// THEN & CATCH /////
        A las promesas le podemos concatenar metodos diferentes.
        Si queremos que haga ciertas cosas, si es rechazada, si es resuelta o que haga algo sin importar si fue rechazada o resuelta.

        THEN, ejecuta dentro () lo que hace si es resuelta.
        Podemos poder los THEN que quedamos.
        .then()
        .then()
        se ejecutan cuando el anterior termina

        CATCH, es especifico para el error

        FINALLY, lo ejecuta sin importar si es resuelto o rechazado, tiene un aire a un default

        EJEMPLO
        */
        promesa
            .then(numero => console.log(numero))
            .catch(error => console.log(error))
            .finally(()=>{console.log("Fin del proceso")})
        /*
*/