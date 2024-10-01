function setup() {
  createCanvas(400, 400);
}

function drawHouse(x, y) {
  // Disegno il corpo della casa
  fill("white");
  rect(x, y, 80, 80);

  // Disegno il tetto della casa
  fill("red");
  triangle(x, y, x + 40, y - 40, x + 80, y);

  // Disegno le porte
  fill("brown");
  rect(x + 30, y + 50, 20, 30);

  // Disegno la finestra di sinistra
  fill("lightblue");
  rect(x + 18.5, y + 15, 15, 20);
  rect(x + 44.5, y + 15, 15, 20);
}

function drawStreet(x, y) {
  quad(x + 30, y, 
    x+50, y, 
    x+60, y+70, 
    x+20, y+70);
}

function draw() {
  background("purple");

  // Disegno la luna
  fill("yellow");
  circle(370, 20, 100);

  // Disegno il prato
  fill("darkgreen");
  rect(0, 250, 400, 150);

  // Disegno le case
  for(let i = 0; i < 4; i++) {
    drawHouse(i * 100, 170);
  }

  // Disegno una strada
  fill("black");
  rect(0, 315, 400, 50);

  // Disegno tutte le strade verso le casette
  for(let i = 0; i < 4; i++) {
    drawStreet(i * 100, 250);
  }
}
