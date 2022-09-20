// declaratives
const button1 = document.getElementById('numb');
const button2 = document.getElementById('caps');
const button3 = document.getElementById('symb');
const check1 = document.getElementById('nu');
const check2 = document.getElementById('ca');
const check3 = document.getElementById('sy');
const inp1 = document.getElementById('num');
const inp2 = document.getElementById('upper');
const inp3 = document.getElementById('symbols');
const text_num = document.querySelector('#on_off_num');
const text_upper = document.querySelector('#on_off_upper');
const text_symb = document.querySelector('#on_off_symb');
const group = [[button1,check1,inp1, text_num],[button2,check2,inp2, text_upper],[button3,check3,inp3, text_symb]];
var numbers = 'nums';
var uppercase = 'upper';
var symbols = 'symb';
var letter = 'letter';
const opt_true = [];
const calculate = document.getElementById('calculate');
let pass_class = document.getElementById('div_pass');
let pass_text = document.getElementById('pass');
// counter
let count = 15;
const minus = document.querySelector('#minus');
const num = document.querySelector('#char-num');
const plus = document.querySelector('#plus');
num.innerHTML = count;
minus.addEventListener('click', () => {
    if(count > 8) {
        count--;
        num.innerHTML = count;
    } else {
        console.log("there can't be less than 8 characters");
        count -= 0;
        num.innerHTML = count;
    }
console.log(count);
});
plus.addEventListener('click', () => {
    if(count < 25) {
        count++;
        num.innerHTML = count;
    } else {
        console.log("there can't be more than 25 charaters");
        count += 0;
        num.innerHTML = count;
    }
console.log(count);
})
//switches

group[0][0].addEventListener('click', () => {
    active(...group[0]);
});
group[1][0].addEventListener('click', () => {
    active(...group[1]);
});
group[2][0].addEventListener('click', () => {
    active(...group[2]);
});
calculate.addEventListener('click', () => {
    pass(numbers, uppercase, symbols, letter, opt_true, pass_text, pass_class);

});
//switches functions
let active = (...btns) => {
    if(btns[2].checked) {
        if(btns[0] == button1) {
            numbers = 'nums';
        } else if(btns[0] == button2){
            uppercase = 'upper';
        } else if(btns[0] == button3) {
            symbols = 'symb';
        }
        btns[1].classList.add('check-on');
        btns[1].classList.remove('check-off');
        btns[3].classList.add('on');
        btns[3].classList.remove('off');
        btns[3].textContent = 'On';
        console.log('add', 'count ');
    } else {
        if(btns[0] == button1){
            numbers = 'no';
        } else if(btns[0] == button2){
            uppercase = 'no';
        } else if(btns[0] == button3){
            symbols = 'no';
        }
        btns[1].classList.add('check-off');
        btns[1].classList.remove('check-on');
        btns[3].classList.add('off');
        btns[3].classList.remove('on');
        btns[3].textContent = 'Off';
        console.log('remove', 'count');
    }
}

//main algo
let pass = (nu, up, sy,lt,op, box, cla) => {
    const password = [];
    const alpha = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const symbols_list = ['!','#','$','%','&','/','(',')','=','?','¡','*','+','{','}','[',']'];
((n, u, s,l,o) => {
    if(l == 'letter'){
        o.push(l);
    }
    if(n == 'nums'){
        o.push(n);
    }
    if(u == 'upper'){
        o.push(u);
    }
    if(s == 'symb'){
        o.push(s);
    }
})(nu, up, sy, lt,op);

for(let i = 1; i <= count; i++) {
    let random_choise = Math.floor(Math.random() * opt_true.length);
    if(opt_true.length === 1) {
        // just leters
        password.push(alpha[Math.floor(Math.random() * alpha.length)]);
    } else {
        if(opt_true[random_choise] == 'letter') {
            password.push(alpha[Math.floor(Math.random() * alpha.length)]);
        } else if(opt_true[random_choise] == 'nums') {
            password.push(Math.floor(Math.random() * 10));
        } else if(opt_true[random_choise] == 'upper') {
            password.push(alpha[Math.floor(Math.random() * alpha.length)].toUpperCase());
        } else if(opt_true[random_choise] == 'symb') {
            password.push(symbols_list[Math.floor(Math.random() * symbols_list.length)]);
        }
    }

}
password.toString();
for(let i = 0; i <4; i++) {
    op.pop();
}
cla.classList.add('pass');
return box.textContent = password.join('');
};