var pato=0
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
background(pato,133,112); //an RGB color for the canvas' background //circle
stroke(255,139,127) // an RGB color for the circle's border
fill(random(100,255),mouseY,127,jim); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  
ellipse(random(300,500),random(400,500),130,mouseX); // center of canvas, 20px dia
strokWeight(5)
triangle (pato,500,400,pato);
rect(100,100,pato,pato);
texfont('impact');
textsize(80);
text("let's fly",100,250)
}

function mousePressed(){
pato= pato +5;
}
if (jim<=0) {
  jim=255;
}else{
  jim=jim-5;
}