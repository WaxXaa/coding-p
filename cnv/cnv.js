let cnvElement = document.getElementById("cnv");
let cnvs = cnvElement.getContext("2d");
let coolor = document.getElementById("coolors");
let w = document.getElementById("widthDraw");
let mouse = false;
let xInt = 0;
let yInt = 0;
let xFin = 0;
let yFin = 0;
cnvElement.addEventListener("mousedown", function(e){
    mouse = true;
    xInt = e.offsetX;
    yInt = e.offsetY;
    
}); //event to active mouse
cnvElement.addEventListener("mousemove", move); // event to move the mouse on cnvs

cnvElement.addEventListener("mouseup", function(){
    mouse = false;
}); // event to desactivated the mouse

function move(e){

    if(mouse == true) {
        draw(coolor.value,w.value, xInt,yInt,e.offsetX,e.offsetY  ,cnvs);
        xInt = e.offsetX;
        yInt = e.offsetY;
    }
    
}
function draw(color,lineW, xI, yI, xF, yF, area) {
    area.beginPath();
    area.strokeStyle = color;
    area.lineWidth = lineW;
    area.moveTo(xI, yI);
    area.lineTo(xF, yF);
    area.stroke();
    area.closePath();
}

