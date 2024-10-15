let angle = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  rect(50, 50, 100, 50);
  fill("purple");
  rect(0, 0, 200, 30);
  strokeWeight(5);
  point(0, 0);
  point(50, 50);
  translate(200, 200);
  rotate(angle);
  circle(0, 0, 100);
  line(0, -50, 0, 50);
  angle += 1;
}
