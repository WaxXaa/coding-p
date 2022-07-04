const home = document.getElementById("i");
const log = document.querySelector("log");
const close = document.querySelector("close-log");

home.addEventListener("click", function(){
    console.log('hhhh')
})
close.addEventListener("click", function(){
    log.classList.remove("open");
});