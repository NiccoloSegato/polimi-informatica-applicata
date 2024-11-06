let data;
let dataObj;

function preload() {
  // Load JSON data
  data = loadTable("assets/data.csv", "csv", "header");
}

let circleSize = 130;
let padding = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#EDEDED");

  dataObj = data.getObject();

  let xPos = padding + circleSize / 2;
  let yPos = windowHeight / 2;
7
  for (let i = 0; i < data.getRowCount(); i++) {
    let item = dataObj[i];
    drawGlyph(xPos, yPos, circleSize, item);
    xPos += circleSize + padding;
  }
}

function draw() {
}

function drawGlyph(x, y, size, rowData) {
  // Draw a circle
  fill(255);
  ellipse(x, y, size, size);
  fill("black");
  text(rowData.country, x, y + size / 2 + 20);
}