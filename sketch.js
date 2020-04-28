
function setup() {
  createCanvas(800,800);
background('#000000');
  let s = 'make some abstract circle art! ps. click to change colors :-)';
fill(10);
text(s, 20, 40, 800, 800); 

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
circle(mouseX,mouseY,mouseY,mouseX);
  strokeWeight(1);
  stroke(r, g, b);
  fill(r, g, b, 10);
  

}

function mousePressed() {
  let d = dist(mouseX, mouseY, 50, 100);
  if (d < 100) {

    r = random(255);
    g = random(255);
    b = random(255);
  }
}

