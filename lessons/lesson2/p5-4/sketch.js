function setup() {
  createCanvas(695, 1000);
}

function draw() {
  let _BACKGROUND = color(126, 150, 130);
  let _PINK = color(220, 145, 145);
  let _RED = color(250, 98, 62);
  let _DARKRED = color(140, 37, 30);

  background(_BACKGROUND);
  
  // Drawing part 1
  fill("white");
  quad(200, 768, 
    325, 668, 
    325, 908, 
    200, 908);

  // Drawing part 2
  fill("black");
  triangle(325, 668, 425, 738, 325, 738);
  rect(325, 738, 40, 32);
  rect(325, 770, 135, 42);
  rect(325, 805, 30, 45);
  rect(325, 850, 115, 58);

  // Drawing part 5
  fill("orange");
  arc(425, 358, 440, 440, HALF_PI, PI + HALF_PI);
  // Adding a blue rectangle to cover the exceeding of the circle
  fill(_BACKGROUND);
  noStroke();
  rect(325, 100, 500, 500);

  // Drawing part 3
  fill(_PINK);
  arc(325, 438, 460, 460, 0, HALF_PI);

  // Drawing part 4
  fill("lightblue");
  arc(325, 438, 460, 460, PI + HALF_PI, 0);
  fill("black");
  circle(395, 356, 20);

  // Drawing part 6
  fill("white");
  rect(305, 208, 20, 230);

  // Drawing part 7
  fill(_RED);
  quad(305, 438, 
    325, 438, 
    325, 555, 
    305, 542);

  fill("pink");
  quad(305, 542, 
    325, 555, 
    325, 575, 
    305, 575);

  fill("green");
  rect(305, 575, 20, 8);
  fill("black");
  rect(155, 575, 150, 8);

  fill("pink");
  rect(305, 583, 20, 20);
  fill(_DARKRED);
  rect(305, 603, 20, 15);
  fill(_RED);
  rect(215, 603, 90, 15)
  quad(305, 618, 
    325, 618, 
    325, 668, 
    305, 666);

}
