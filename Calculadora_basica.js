//Variables 
let buttonDatos = document.getElementById("datos");
let buttonIngreso = document.getElementById("Ingreso");
let buttoSUMA = document.getElementById("SUMA");
let buttonRESTA = document.getElementById("RESTA");
let buttonMULTI = document.getElementById("MULTI");
let buttoDIVIDIRs = document.getElementById("DIVIDIR");
let Habilitar = 0;
let op = 0;


// funciones 

const activar = () => {
op = parseInt(prompt(    "ESCRIBE :  \n 1 - suma \n 2 - resta \n 3 - multiplicaccion \n 4 - division"));

while( op != 1 && op != 2 &&  op != 3    &&   op != 4 ){
    alert("Ingresa una opcion valida")
    op = prompt(    "ESCRIBE :  \n 1 - suma \n 2 - resta \n 3 - multiplicaccion \n 4 - division");
}
habilitar = 1;
}

const Ingreso = () => {

    console.log("op");
    console.log(op);

    let primerNumero = parseInt(prompt("Escribe el primer numero : "));

    let segundoNumero = parseInt(prompt("Escribe el segundo numero : "));

    if(op == 1){
        sumar(primerNumero,segundoNumero );
    } else if (op == 2) {
        restar(primerNumero,segundoNumero );
    } else if (op == 3) {
        multi(primerNumero,segundoNumero );
    } else if ( op == 4) {
        dividir(primerNumero,segundoNumero );
    }
  

    }

const sumar  = ( primero , segundo ) => {
    let resultado = primero + segundo;
    alert( `el resultado de la suma es ${resultado}`)
}

const restar  = ( primero , segundo ) => {
    let resultado = primero - segundo;
    alert( `el resultado de la resta es ${resultado}`)
}

const multi  = ( primero , segundo ) => {
    let resultado = primero + segundo;
    alert( `el resultado de la multiplicacion es ${resultado}`)
}

const dividir  = ( primero , segundo ) => {
    let resultado = primero + segundo;
    alert( `el resultado de la division es ${resultado}`)
}
        


// evento
buttonDatos.onclick = function (){
    activar();
}
buttonIngreso.onclick = function (){
    if(habilitar == 1) {
        Ingreso();
}

}