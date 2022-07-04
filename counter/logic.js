let N = 0;
const In = document.getElementById("increase");
const De = document.getElementById("decrease");
const Re = document.getElementById("reset");
const value = document.getElementById("numb");


  In.addEventListener("click", function() {
    N++;
    console.log(N) 
    value.textContent = N;
});

De.addEventListener("click", function() {
    N--;
    console.log(N) 
    value.textContent = N;
});
Re.addEventListener("click", function() {
     N = 0;
    console.log(N) 
    value.textContent = N;
});







