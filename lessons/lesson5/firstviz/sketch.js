let riversData;
let arrayOfNames = [];
let lunghezze = [];

function preload() {
  riversData = loadTable('data/rivers-data.csv');
}

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < riversData.getRowCount(); i++) {
    arrayOfNames[i] = riversData.get(i, 1);
    lunghezze[i] = riversData.get(i, 3);
  }
}

function draw() {
  background(220);

  map()

  // Creo diagramma cartesiano
  line(40, 200, 40, 20);
  line(40, 200, 390, 200);

  // Aggiungere label su asse y
  text("Len", 10, 100);
}
