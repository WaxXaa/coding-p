let inpt = document.getElementById("num");
const g_worlds = [3.7, 8.87, 3.71, 24.79, 10.44, 8.87, 11.15, 1.62];
const g_earth = 9.8;
function w(){
  let send = document.querySelector('#send')
   , ch1 = document.querySelectorAll('.ch1')
   , ch2 = document.querySelectorAll('.ch2')
   , ch3 = document.querySelectorAll('.ch3')
   , ch4 = document.querySelectorAll('.ch4')
   , ch5 = document.querySelectorAll('.ch5')
   , ch6 = document.querySelectorAll('.ch6')
   , ch7 = document.querySelectorAll('.ch7')
   , ch8 = document.querySelectorAll('.ch8');
  console.log(send,ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8);
  send.onclick = function weight(){
    ch1[1].textContent = parseInt(inpt.value)*g_worlds[0]/g_earth;
    ch2[1].textContent = parseInt(inpt.value)*g_worlds[1]/g_earth;
    ch3[1].textContent = parseInt(inpt.value)*g_worlds[2]/g_earth;
    ch4[1].textContent = parseInt(inpt.value)*g_worlds[3]/g_earth;
    ch5[1].textContent = parseInt(inpt.value)*g_worlds[4]/g_earth;
    ch6[1].textContent = parseInt(inpt.value)*g_worlds[5]/g_earth;
    ch7[1].textContent = parseInt(inpt.value)*g_worlds[6]/g_earth;
    ch8[1].textContent = parseInt(inpt.value)*g_worlds[7]/g_earth;
  }
}
w();

  
