let button;
let elem;
let dice = 0;

function setup() {
  createCanvas(400, 400);

  elem = createElement("h2", "Keep rolling! 🤙🏼");
  elem.position(0, 0);

  button = createButton("Lancia il dado");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function rollDice() {
  dice = floor(random(1, 6));
}

function draw() {
  background("red");
  stroke("white");
  strokeWeight(3);
  fill("white");
  textSize(50);

  text("Dice value: " + dice, 0, 300);
}
