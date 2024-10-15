function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function drawSquare(squareIndex, subSquares) {
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j = j + subSquares/squareIndex) {
      square(i, j + (squareIndex*100), 10);
    }
  }
}

function draw() {
  background("black");

  drawSquare(1, 30);
}
