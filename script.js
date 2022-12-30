// Reglas
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


var textoEntrada = document.getElementById("textoEntrada");
var textoSalida = document.getElementById("textoSalida");
var elementosBorrar = document.getElementById("desaparece");
var botonCopiar = document.getElementById("btnCopia");



function encriptar(){
    
    var convertido = textoEntrada.value.toLowerCase().replace(/e/g,"enter");
    texto = convertido;
    convertido = texto.replace(/i/g,"imes");
    texto = convertido;
    convertido = texto.replace(/a/g,"ai");
    texto = convertido;
    convertido = texto.replace(/o/g,"ober");
    texto = convertido;
    convertido = texto.replace(/u/g,"ufat");
    textoSalida.innerHTML = convertido;
    textoSalida.classList.add("aparece");
    elementosBorrar.setAttribute("hidden", "true");
    botonCopiar.setAttribute("style", "");

}

    
function desencriptar(){

    var convertido = textoEntrada.value.toLowerCase().replace(/enter/g,"e");
    texto = convertido;
    convertido = texto.replace(/imes/g,"i");
    texto = convertido;
    convertido = texto.replace(/ai/g,"a");
    texto = convertido;
    convertido = texto.replace(/ober/g,"o");
    texto = convertido;
    convertido = texto.replace(/ufat/g,"u");

    console.log(convertido);
    document.getElementById("textoSalida").innerHTML = convertido;
}

function copiar(){ 
    textoSalida.select();
    document.execCommand("copy"); 
}

function desaparecerBotonCopiar(){
    botonCopiar.setAttribute("style", "display:none;");
}

desaparecerBotonCopiar();