
fill(cor);
  
for(let contador in circuloX) {
  circle(circuloX[contador], circuloY[contador], 50);    
  circuloX[contador]+= random(0,3);
  circuloY[contador]+= random(-3,3); 
  let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
createCanvas(400, 400);
background(color(100, 0 , 0));