function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Color the background dark blue
  background("darkblue");
  // Draw a yellow circle at (300, 50) with a radius of 100, apply the fill color
  fill("yellow");
  stroke("white");
  circle(300, 50, 100);

  fill("green");
  stroke("darkgreen");
  rect(0, 200, 400, 200); 

  fill("white");
  stroke("black");
  strokeWeight(2);
  text("C'era una volta...", 200, 350);
}
