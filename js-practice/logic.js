let cnv = document.getElementById('cnvs').getContext('2d');
r = 0;
g = 0;
b = 90;
function draw(x1,y1,x3,x4,r, g, b){
  cnv.beginPath();
  cnv.strokeStyle = "rgb("+r+", "+g+", "+b+")";
  cnv.moveTo(x1, y1);
  cnv.lineTo(x3, x4);
  cnv.stroke();
  cnv.closePath();
}
for(i = 0; i<500; i++){
  y1 = 10 * i;
  x3 = 10 * (i++);
  draw(0, y1, x3, 500, r, g, b);
  console.log(i);
  r = r + 10;
  g =  g + 2;
  b = b + 50;
}
r = 0;
g = 0;
b = 90;
for(i = 0; i<500; i++){
  x1 = 10 * i;
  x4 = 10 * (i++);
  draw(x1, 0, 500, x4, r, g, b);
  r = r + 10;
  g = g + 2;
  b = b + 50;
}
r = 0;
g = 0;
b = 90;
for(i = 0; i<250; i++){
  x1 = 2 * i;
  x4 = 1 * (i++);
  draw(x1, 0, 250, x4, r, g, b);
  r = r + 10;
  g = g + 2;
  b = b + 50;
}
r = 0;
g = 0;
b = 90;
for(i = 0; i<250; i++){
  x1 = 5 * i;
  x4 = 10 * (i++);
  draw(x1, 0, 250, x4, r, g, b);
  r = r + 10;
  g = g + 2;
  b = b + 50;
}
r = 0;
g = 0;
b = 90;
for(i = 0; i<250; i++){
  y1 = 2 * i;
  x3 = 1 * (i++);
  draw(0, y1, x3, 250, r, g, b);
  console.log(i);
  r = r + 10;
  g =  g + 2;
  b = b + 50;
}
r = 0;
g = 0;
b = 90;
for(i = 0; i<250; i++){
  y1 = 5 * i;
  x3 = 10 * (i++);
  draw(0, y1, x3, 250, r, g, b);
  console.log(i);
  r = r + 10;
  g =  g + 2;
  b = b + 50;
}
draw(250, 0, 250, 500,0,0,0);
draw(0, 250, 500, 250,0,0,0);
