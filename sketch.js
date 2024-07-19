function setup() {
  createCanvas(700, 700);

background(255,204,0);
strokeWeight(50);
  stroke("purple");
  frameRate(10);
}
function draw(){
let posX = mouseX;
let posY = mouseY;
point(posX,posY);
}