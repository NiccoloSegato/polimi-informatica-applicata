let matrix = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function drawBorders() {
  strokeWeight(4);
  stroke("black");
  line(windowWidth/2 - 450/2, windowHeight/2 - 450/2, windowWidth/2 + 450/2, windowHeight/2 - 450/2);
  line(windowWidth/2 - 450/2, windowHeight/2 + 450/2, windowWidth/2 + 450/2, windowHeight/2 + 450/2);
  line(windowWidth/2 - 450/2, windowHeight/2 - 450/2, windowWidth/2 - 450/2, windowHeight/2 + 450/2);
  line(windowWidth/2 + 450/2, windowHeight/2 - 450/2, windowWidth/2 + 450/2, windowHeight/2 + 450/2);
}

function drawGrid() {
  strokeWeight(1);
  stroke("black");
  for (let i = 1; i < 9; i++) {
    if(i % 3 == 0) {
      strokeWeight(2);
    }
    else {
      strokeWeight(1);
    }
    line(windowWidth/2 - 450/2 + i * 50, windowHeight/2 - 450/2, windowWidth/2 - 450/2 + i * 50, windowHeight/2 + 450/2);
    line(windowWidth/2 - 450/2, windowHeight/2 - 450/2 + i * 50, windowWidth/2 + 450/2, windowHeight/2 - 450/2 + i * 50);
  }
}

function generateMatrix() {

  for(let i = 0; i < 9; i++) {
    matrix[i] = [];
    for(let j = 0; j < 9; j++) {
      matrix[i][j] = 0;
    }
  }

  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      let value = Math.floor(random(1, 10));
      const temp = checkValue(i, j, value);
      if(temp) {
        matrix[i][j] = value;
      }
    }
  }

  console.table(matrix);
}

function checkValue(row, col, value) {
  let rowValues = matrix[row];
  let colValues = [];
  for(let i = 0; i < 9; i++) {
    colValues.push(matrix[i][col]);
  }

  let squareValues = [];
  let squareRow = Math.floor(row / 3) * 3;
  let squareCol = Math.floor(col / 3) * 3;
  for(let i = squareRow; i < squareRow + 3; i++) {
    for(let j = squareCol; j < squareCol + 3; j++) {
      squareValues.push(matrix[i][j]);
    }
  }

  if(rowValues.includes(value) || colValues.includes(value) || squareValues.includes(value)) {
    return false;
  }
  else {
    return true;
  }
}

function drawNumbers() {
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if(matrix[i][j] != 0) {
        fill("black");
        textSize(20);
        text(matrix[i][j], windowWidth/2 - 450/2 + j * 50 + 20, windowHeight/2 - 450/2 + i * 50 + 30);
      }
    }
  }
}

function draw() {
  background("ivory");

  // Disegno il bordo del sudoku
  drawBorders();

  // Disegno la griglia del sudoku
  drawGrid();

  // Genero la matrice
  generateMatrix();

  // Disegno i numeri
  drawNumbers();
}
