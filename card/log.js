let N = document.getElementById('F');
let A = 0;

N.addEventListener('click', changeVlaue);

function changeVlaue(){
    A++
    let a = A;
    if(a % 2 == 0){
        N.textContent = 'Follow';
    } else{
        N.textContent = 'Unfollow';
    }
}
