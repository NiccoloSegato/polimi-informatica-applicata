function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#3b3c4c");
  fill("lightblue");

  let columns = windowWidth / 15;
  let rows = windowHeight / 25;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      rect(i * 15, j * 25, 10, 20);
    }
  }
}
