/*
calculate the avarage temp, the minimun and the maximun temp of the day. 1 input per hour
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