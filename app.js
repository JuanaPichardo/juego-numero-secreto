let numeroSecreto = 0;
let intentos = 1;
let listaDeNumerosSorteados = [];//inicio de los arreglos
let numeroMaximo = 10;
let maximoIntentos = 3;


console.log(numeroSecreto)
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}


function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p',`¡Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El numero secreto es menor');
        }else{
            asignarTextoElemento ('p','El numero secreto es mayor');
        }
        intentos++;
        //numeromaximo de intentos
        if (intentos > maximoIntentos) { 
            asignarTextoElemento('p',`Llegaste al numero maximo de: ${maximoIntentos} intentos` );
        
        }
        limpiarCaja();
       
    }
    return; 
   
// aqui las llaves sirven como capsula 
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    if (listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros existentes')
    }else{
        // si el numero generado esta inicluido enn la lista
            if(listaDeNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaDeNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
    

}

function condicionesInicialesUno() {
    asignarTextoElemento ('h1','¡Juego del numero secreto!');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //todo lo que hara de nuevo para: nuevo juego
}

function reiniciarJuego(){
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesInicialesUno(); 
    //desabilitar boton 
    document.querySelector ('#reiniciar').setAttribute('disabled','true');
}

condicionesInicialesUno();

