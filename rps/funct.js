const humanOpt = document.querySelectorAll('.opt')
let pcOpt = ['piedra', 'papel', 'tijera']
humanOpt.forEach((opt) => {
    opt.addEventListener('click', (e) => {
        let eleccionHumano = e.target.id
        let eleccionPc =  random(pcOpt)
        let relutado = result(eleccionHumano, eleccionPc)
        console.log(relutado, eleccionHumano, eleccionPc)
        document.querySelector('#result').innerHTML = relutado
    })
})
let random = (pc) => {
    let m = Math.floor(Math.random()* 3);
    console.log(m);
    return pc[m]
}
let result = (humano, pc) => {
    let r
    humano == pc ? r ='its a draw' :
    humano == 'piedra' && pc == 'tijera' ? r ='you win' :
    humano == 'papel' && pc == 'piedra' ? r ='you win' :
    humano == 'tijera' && pc == 'papel' ? r ='you win' :
    r = 'you lose'
    return r
}


