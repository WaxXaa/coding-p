//salary
/*
let i = 0;
let name;
let salary;
let tot_salary = 0;
while(i <5) {
  name = prompt("enter the employe's name");
  salary = parseFloat(prompt("enter the salary"));
  tot_salary = tot_salary + salary;
  i++;
  
}
document.write(tot_salary);
*/

//number
/*
let i = 1;
let menor_15 = 0;
let entre45_55 = 0;
let mayor_50 = 0;
while(i <=100) {
    console.log(i);
  if(i < 15){
    menor_15++;
  }
  else if(i>45 & i<55) {
    entre45_55++;
  }
  if(i >50) {
    mayor_50++;
  } 
  i++;

}
document.write(menor_15 + "\n");

document.write(entre45_55 + "\n");
document.write(mayor_50);

*/



//estatura
/*
let name;
let tall = 0;
let acum1 = 0;
let acum2 = 0;
let acum3 = 0;
let acum4 = 0;

for(i = 0;i < 3;i++){
  tall = parseFloat(prompt("enter the tall"));
  console.log(i);
  if(tall<1.60 && tall>0.20) {
    acum1 = acum1 +1;
  }
  else if(tall>=1.60 && tall<1.70) {
    acum2 = acum2 +1;
  }
  else if(tall>=1.70 && tall<1.80) {
    acum3 = acum3 +1;
  }
  else if(tall>=1.80) {
    acum4 = acum4 + 1;
  }
  else if(tall > 2.20) {
    alert("whait!!!, that is more than 2.20!!! lol");
  }
  else {
    alert("that is not a real number")
  }
}
document.write(acum1, acum2, acum3, acum4);
*/




/*
//restaurant
//give the menu of a restaurant depending on the day and time of the week

let answ = prompt("want to check the menu? \n (yes or no)");
while(answ == "yes") {
  
  let date = parseInt(prompt("enter the day \n (1 to 7)"));
  if(date >= 5 && date != 7){
    let hour = parseInt(prompt("enter the time \n (0 to 24)"));
    console.log(date, hour);
  
    if(date == 5 && hour < 16) {
    alert('the menu on friday, before 4:00pm is: chicken');
    }
      else if(date == 5 && hour >= 16) {
        alert('the menu on friday after 4:00pm is: salad');
      }
      else if(date == 6 && hour < 12) {
        alert('the menu on saturday before 12:00pm is: meet');
      }
      else if(date == 6 && hour >= 12 && hour < 20) {
        alert('the menu on saturday after 12:00pm and before 20:00pm is: minutas');
      }
      else if(date == 6 && hour >= 20) {
        alert('the menu on saturday after 20:00pm is: dessert');
      }
  }
  else if(date == 7) {
      alert('the menu on sunday is: pasta');
  }
  else {
      alert('the restaurant is close, sorry');
    
  }
  answ = prompt('do you want to check the menu again? \n (yes or no)');
  console.log(answ);
}
*/



/*
//calculate the slary of an employee depending of how many years have been worked for the company

let name = prompt('enter the name of the employee');
let ini_sal = parseFloat(prompt('enter the salary of the employee'));
let years = parseInt(prompt('enter how many years the employee have worked for the company'));
let fin_sal = 0;
let net = 0;


if(years < 3) {
    fin_sal = ini_sal + (ini_sal * 0.03);
}
else if(years >= 3 && years <5) {
    fin_sal = ini_sal + (ini_sal * 0.05);
 
}
else if(years >= 5 && years < 10) {
    fin_sal = ini_sal + (ini_sal * 0.07);
 
}
else if(years >= 10) {

  fin_sal = ini_sal + (ini_sal * 0.1);
 
}

let social_ensurace = 0.065;
let edu_ensurance = 0.012;
let tot_ensurance = social_ensurace + edu_ensurance;
net = fin_sal - (fin_sal * tot_ensurance);
console.log(name + " salary is: " + net);
*/


/*
let num = parseInt(prompt('entero'));
let sum = 0;
for(i=1;i<=num;i++) {
  sum = sum + i;
  console.log(sum, i);
}
console.log(sum);
*/

/*
let ent = parseInt(prompt('ingrese un numero entre (1-9)'));
let mult = 0;
let arr = [];
for(i= 1;mult <= 50 - ent; i++) {
  mult = ent * i;
  console.log(mult);
  arr.push(mult);
}
console.log('los multiplos de ' + ent + ' son: ' + arr);
*/
/*
let num = parseInt(prompt('enter a number'));
let table;
for(i=1;i<=12;i++) {
  table = num * i;
  console.log(table);
}
*/


//function uni
/*
function quali(note1, note2, note3) {
  let totalNote = (note1 * 0.2) + (note2 * 0.3) + (note3 * 0.5);
  return totalNote;
  
}
let name = prompt("enter the student name");
let cal1 = prompt("enter the first qualification");
let cal2 = prompt("enter the second qualification");
let cal3 = prompt("enter the thirt qualification");

let quali_final = quali(cal1, cal2, cal3);

if(quali_final >= 71) {
  console.log(name, quali_final);
  console.log(quali_final, "  aproved!!");
} else {
  console.log(name, quali_final);
  console.log(quali_final, "  rerpoved!!");
}
*/


//Fibonacci serie


// fibonacci recursive






/*
// fibonacci direct
function fibNum(num) {
  let fib = [0,1];
  
  for(i = 2;i <= num; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[num];
}
console.log()
*/
// reverse an input
/*
let number = prompt("enter number");
let out = [];
for(i=0;i<=number.length-1;i++) {
  out.push(number[i]);
}
console.log(out.toString());

function reverse(arr) {
  let nout = [];
  for(i = arr.length-1;i>=0;i--) {
    nout.push(arr[i]);
  }
  return nout;
}
console.log(reverse(out).toString());
*/

// The factorial number
/*
let n = parseInt(prompt("enter a number"));
let fact = 1; 
for(i=1;i<=n;i++) {
  fact = fact* i;
  console.log(fact);
}
console.log(fact);
*/

/*
// temp
let t;
let max_te = 0;
let ac = 0;
for (let i = 1; i <= 4; i++) {
  t = parseFloat(prompt("ingrese temperatura"));
  if (t >= 23 && t <= 40) {
    if (i == 1) {
    console.log("temp is", t);
      max_te = t;
   } else if (i != 1) {
      let mx = ma(t, i, max_te);    
      } 
    }

  }


 function ma (temp, i_f, curr) {
    console.log("temp is", temp);
    console.log("max_i", curr);
      if (temp > curr){
        curr = temp;
        let max_t = curr;
        console.log("max", curr);
      } else {
          max_t + 0;
      console.log("add 0", max_t)
        }
   return curr;
 }

function mi (temp, i_f) {
 
  if (i_f == 1) {
    min = temp;
  } else {
    if ( temp < min) {
    min = temp;
    console.log("min", min);
        }
    }
}
function pro (acum) {
  let ava = acum / 4;
  return ava;
}
*/


/*
// an array practice
let arr = [];
for(let i = 0; i < 100; i += 2) {
  arr[i] = 0;
}
for(let i = 1; i < 100; i += 2) {
  arr[i] = 1;
}
console.log(arr);
*/
