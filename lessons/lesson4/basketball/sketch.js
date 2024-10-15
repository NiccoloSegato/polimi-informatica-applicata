function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function drawBall(xCenter, yCenter, diameter) {
  fill("orange");
  stroke(0);
  strokeWeight(3);
  circle(xCenter, yCenter, diameter);
  line(-50 + xCenter, yCenter, 50 + xCenter, yCenter);
  line(-35 + xCenter, -35 + yCenter, 35 + xCenter, 35 + yCenter);
  line(35 + xCenter, -35 + yCenter, -35 + xCenter, 35 + yCenter);
}

function rotateBall(xCenter, yCenter, diameter, angle) {
  push();
  translate(xCenter, yCenter);
  rotate(angle);
  drawBall(0, 0, diameter);
  pop();
}

let angle = 0;
function draw() {
  background(220);

  fill("orange");
  stroke("black");
  strokeWeight(3);

  rotateBall(200, 300, 100, angle);
  rotateBall(200, 100, 100, angle);
  angle += 0.7;
}
