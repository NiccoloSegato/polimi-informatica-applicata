let moveNames = ["Sasso", "Carta", "Forbice"];
let userMove = 0;
let opponentMove = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("whote");

  textSize(20);
  textStyle(NORMAL);
  fill("black");
  text("Avversario", (windowWidth / 2 - 40), 100);
  text("Tu", (windowWidth / 2 - 20), 500);
  textSize(30);
  text("Scegli cosa giocare", (windowWidth / 2 - 120), windowHeight - 200);
  let sassoBtn = createButton('Sasso');
  sassoBtn.position((windowWidth / 3 - 20), windowHeight - 150);
  sassoBtn.mousePressed(() => {
    userMove = 1;
    playOpponent();
  });

  let cartaBtn = createButton('Carta');
  cartaBtn.position((windowWidth / 2 - 20), windowHeight - 150);
  cartaBtn.mousePressed(() => {
    userMove = 2;
    playOpponent();
  });

  let forbiceBtn = createButton('Forbice');
  forbiceBtn.position((windowWidth / 1.5 - 20), windowHeight - 150);
  forbiceBtn.mousePressed(() => {
    userMove = 3;
    playOpponent();
  });

  if(userMove != 0) {
    text(moveNames[userMove - 1], (windowWidth / 2 - 50), 450);
    showResult();
  }

}

function playOpponent() {
  opponentMove = floor(random(1, 4));
}

/**
 * Funzione per calcolare il risultato del gioco
 * @returns 0 se pareggio, 1 se vince l'utente, 2 se vince l'avversario
 */
function showResult() {
  text(moveNames[opponentMove - 1], (windowWidth / 2 - 50), 150);
  textSize(50);
  if(userMove == opponentMove) {
    text("Pareggio", (windowWidth / 2 - 100), windowHeight / 2 -  130);
    return;
  }
  else if(userMove == 3 && opponentMove == 1) {
    text("Hai perso", (windowWidth / 2 - 100), windowHeight / 2 -  130);
    return;
  }
  else if(opponentMove == 3 && userMove == 1) {
    text("Hai vinto", (windowWidth / 2 - 100), windowHeight / 2 -  130);
    return;
  }
  else if(opponentMove < userMove) {
    text("Hai vinto", (windowWidth / 2 - 100), windowHeight / 2 -  130);
    return;
  }
  else {
    text("Hai perso", (windowWidth / 2 - 100), windowHeight / 2 -  130);
    return;
  }
}