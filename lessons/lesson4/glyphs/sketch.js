const lineLength = 100;
const halfLineLength = lineLength / 2;

const rotations = [45, 90, 180, 270];

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function drawLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  circle(x1, y1, 5);
  circle(x2, y2, 5);
}

function drawGlyph(x, y, lines) {
  stroke("black");
  strokeWeight(7);
  // Draw horizontal line
  drawLine(x - halfLineLength, y, x + halfLineLength, y);
  // Draw vertical line
  drawLine(x, y - halfLineLength, x, y + halfLineLength);

  stroke("red");
  let degrees = 45;
  for(let i = 0; i < lines; i++) {
    // Draw diagonal lines
    push();
    translate(x, y);
    rotate(degrees);
    drawLine(-halfLineLength, 0, halfLineLength, 0);
    pop();
    degrees += 90;
  }
}

function draw() {
  background(220);

  drawGlyph(100, 100, 1);
}
