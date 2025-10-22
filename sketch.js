var pato=0;
var jim=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(53,133,112); //an RGB color for the canvas' background //circle
}

//The draw function happens over and over again
function draw() {

stroke(255,139,127); //orange pink
fill(random(100,255),mouseY,127,jim); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  
ellipse(random(300,500),random(400,500),130,mouseX); // center of canvas, 20px dia
strokeWeight(5);
line(pato,500,400,pato);

textFont('Impact');
textSize(80);
text("let's fly",100,250);
rect(mouseX,mouseY,pato,pato);
strokeWeight(0);
fill(230,20,230);

ellipse(mouseX,mouseY,pato,pato);
}

function mousePressed(){
 
 if(pato>=255) {
 }else{
 pato=pato+5;
 }

 if (jim<=0){
 jim=255;
 }else{
  jim= jim-5;
 }
}