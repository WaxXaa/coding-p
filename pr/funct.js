
const Rbtn = document.getElementById("Rbtn");
const Gbtn = document.getElementById("greenBtn");
const Bbtn = document.getElementById("brownBtn");
const BLbtn = document.getElementById("blackBtn");
const REbtn = document.getElementById("redBtn");
const colors = ["#52b788", "#9d6b53", "#343a40", "#bd1f36"];
const piedra = document.getElementById("rock");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const mOption = ['tijera', 'papel', 'piedra'];
const resultado = document.getElementById("span");
function random() {
    let m = Math.floor(Math.random()* 3);
    console.log(m);
    return m;
}

piedra.addEventListener("click", function() {
    let r = random();
   if(r === 0) {
       document.body.style.background = colors[0];
       console.log('you win');
       resultado.textContent = 'you win';
   } else{
       document.body.style.background = colors[3];
       console.log('the pc won');
       resultado.textContent = 'the pc won';
   }
});
tijera.addEventListener("click", function() {
    let r = random();
    if(r === 1) {
        document.body.style.background = colors[0];
        console.log('you win');
        resultado.textContent = 'you win';
    } else{
        document.body.style.background = colors[3];
        console.log('the pc won');
        resultado.textContent = 'the pc won';
    }
});
papel.addEventListener("click", function() {
    let r = random();
    if(r === 2) {
        document.body.style.background = colors[0];
        console.log('you win');
        resultado.textContent = 'you win';
    } else{
        document.body.style.background = colors[3];
        console.log('the pc won');
        resultado.textContent = 'the pc won';
    }
});


 Rbtn.addEventListener("click", function (){
     let ColorR = randomColor();
     document.body.style.background = colors[ColorR];
 });

 function randomColor(){
     return Math.floor(Math.random()*colors.length);
 }
 Gbtn.addEventListener("click", function(){
     document.body.style.background = colors[0];
 });
 BLbtn.addEventListener("click", function(){
    document.body.style.background = colors[2];
 });
 Bbtn.addEventListener("click", function(){
    document.body.style.background = colors[1];
 });
 REbtn.addEventListener("click", function(){
    document.body.style.background = colors[3];
 });
