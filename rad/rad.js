let valor = document.getElementById('num');
let ext = document.getElementById('fctn');
ext.addEventListener('click', function(){
    console.log(parseInt(valor.value));
});