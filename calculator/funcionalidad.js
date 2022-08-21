let operando_A;
let operando_b;
let operacion;
console.log("holaaa");
// id de html

let resultado = document.getElementById("resultado");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let division = document.getElementById("division");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let sies = document.getElementById("seis");
let multiplicacion = document.getElementById("multiplicacion");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let restar = document.getElementById("restar");
let cero = document.getElementById("cero");
let reset= document.getElementById("reset");
let igual= document.getElementById("igual");
let suma= document.getElementById("suma");


uno.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 1;
});
dos.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 2;
});
tres.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 3 ;
});
cuatro.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 4 ;
});
cinco.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 5 ;
});
seis.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 6 ;
});
siete.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 7 ;
});
ocho.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 8 ;
});
nueve.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 9 ;
});
cero.addEventListener("click", function(e){
    resultado.textContent = resultado.textContent + 0 ;
});
reset.addEventListener("click", function(e){
    resetear();
});
suma.addEventListener("click", function(e){
    operando_A = resultado.textContent;
    operacion = "+";
    limpiar();
});
restar.addEventListener("click", function(e){
    operando_A = resultado.textContent;
    operacion = "-";
    limpiar();
});
multiplicacion.addEventListener("click", function(e){
    operando_A = resultado.textContent;
    operacion = "*";
    limpiar();
});
division.addEventListener("click", function(e){
    operando_A = resultado.textContent;
    operacion = "/"
    limpiar();
});
igual.addEventListener("click", function(e){
    operando_b = resultado.textContent;
    resolver();
});


function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operando_A = 0;
    operando_b = 0;
    operacion = "";
}

function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
          res = parseFloat(operando_A) + parseFloat(operando_b);
          break;
        case "-":
            res = parseFloat(operando_A) - parseFloat(operando_b);
            break;
        case "*":
            res = parseFloat(operando_A) * parseFloat(operando_b);
          break;
        case "/":
            res = parseFloat(operando_A) / parseFloat(operando_b);
          break;
      }
    resetear();
    resultado.textContent = res;

}