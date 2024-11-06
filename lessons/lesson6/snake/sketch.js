let s;
let scl = 20;

let xFood;
let yFood;

function setup() {
  createCanvas(400, 400);

  s = new Snake(0, 0);

  pickFoodLocation();
  frameRate(10);

}

function draw() {
  background(220);

  fill(255, 0, 100);
  rect(xFood, yFood, scl, scl);
  
  s.show();
  s.update();

  if(s.eat(xFood, yFood)) {
    pickFoodLocation();
  }
}

class Snake {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.len = 0;
    this.tail = [];
  }

  show() {
    fill(255);
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  dir(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {
    if(this.len === this.tail.length) {
      for(var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.len - 1] = createVector(this.x, this.y);
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    if(this.x > width - scl) {
      this.x = 0;
    }
    else if(this.x < 0) {
      this.x = width - scl;
    }

    if(this.y > height - scl) {
      this.y = 0;
    }
    else if(this.y < 0) {
      this.y = height - scl;
    }
  }

  eat(x, y) {
    if(this.x === x && this.y === y) {
      this.len++;
      return true;
    }
    return false;
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    s.dir(0, -1);
  }
  else if(keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  }
  else if(keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
  else if(keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}

function pickFoodLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  xFood = floor(random(cols)) * scl;
  yFood = floor(random(rows)) * scl;
}