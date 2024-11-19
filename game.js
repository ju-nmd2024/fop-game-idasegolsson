let x = 200;
let y = 200;

let starX = [];
let starY = [];
let starAlpha = [];
let state = "start";
let characterY = -400;
let velocity = 2;
let acceleration = 0.5;
//let speedLimit = 5;

function setup() {
  createCanvas(1000, 1000);
  stars();
  console.log("Canvas created");
}

function character(x, y, s) {
  scale(s);
  head(x, y);
  antennas(x, y);
  ear(x, y);
  push();
  translate(x + 100, 0);
  scale(-1, 1);
  ear(0, y);
  pop();
  eye(x, y);
  eye(x + 70, y);
  nose(x, y);
  mouth(x, y);
  body(x, y);
  ship(x, y);
  //head
  function head(x, y) {
    fill(161, 207, 57);
    ellipse(x + 50, y + 50, 200, 210);
  }

  //head(x,y);
  function antennas(x, y) {
    //antennas
    noFill();
    stroke(161, 207, 57);
    strokeWeight(15);

    // left antenna
    arc(x - 30, y - 30, 80, 80, PI + QUARTER_PI, TWO_PI);
    arc(x + 130, y - 30, 80, 80, PI, -QUARTER_PI);

    //dots
    fill(161, 207, 57);
    ellipse(x - 55, y - 60, 20);
    ellipse(x + 156, y - 60, 20);
  }
  //antennas(x, y);

  //ear
  function ear(x, y) {
    noStroke();
    fill(161, 207, 57);
    push();
    translate(x - 15, y - 20);
    rotate(-0.5);
    ellipse(0, 0, 30, 45);
    pop();
  }
  //ear(x, y);

  //eye
  function eye(x, y) {
    fill(255, 255, 255);
    ellipse(x + 15, y + 25, 60, 55);

    fill(0, 0, 0);
    ellipse(x + 15, y + 25, 50);

    fill(255, 255, 255);
    ellipse(x + 5, y + 12, 10);
    ellipse(x, y + 22, 7);
    ellipse(x + 8, y + 21, 5);
  }

  //eye(x, y);

  //nose
  function nose(x, y) {
    fill(61, 157, 60);
    ellipse(x + 50, y + 58, 20, 15);
    fill(161, 207, 57);
    ellipse(x + 46, y + 58, 5);
    ellipse(x + 54, y + 58, 5);
  }
  //nose(x, y);

  //mouth
  function mouth(x, y) {
    fill(0, 0, 0);
    arc(x + 50, y + 80, 80, 70, 0, PI);

    fill(255, 255, 255);
    rect(x + 39, y + 80, 10, 12, 2);
    rect(x + 52, y + 80, 10, 12, 2);
  }
  //mouth(x,y);

  //body
  function body(x, y) {
    fill(161, 207, 57);
    ellipse(x + 50, y + 228, 150, 200);
  }

  //spaceship
  function ship(x, y) {
    //glass
    fill(170, 170, 170, 80);
    beginShape();
    vertex(x - 115, y + 250);
    bezierVertex(x - 180, y - 370, x + 314, y - 263, x + 211, y + 289);
    endShape();

    //body of ship
    fill(93, 93, 93);
    ellipse(x + 50, y + 280, 450, 120);
    fill(42, 42, 42);
    rect(x - 15, y + 320, 130, 40, 20);

    //red dots
    fill(255, 0, 0);
    ellipse(x + 50, y + 240, 20);
    ellipse(x + 221, y + 258, 20);
    ellipse(x - 120, y + 258, 20);
    //green dots
    fill(0, 255, 0);
    ellipse(x - 67, y + 247, 20);
    ellipse(x + 110, y + 242, 20);
    //blue dots
    fill(0, 0, 255);
    ellipse(x - 8, y + 242, 20);
    ellipse(x + 166, y + 247, 20);
  }
}

function moon() {
  noStroke();
  fill(100, 100, 100);
  beginShape();
  vertex(x - 200, y + 456);
  bezierVertex(x - 20, y + 343, x + 167, y + 340, x + 347, y + 457);
  endShape();

  fill(65, 65, 65);
  ellipse(x - 80, y + 440, 40, 29);
  ellipse(x - 17, y + 405, 60, 40);
  ellipse(x + 22, y + 439, 20, 15);
  ellipse(x + 196, y + 431, 60, 40);
  ellipse(x + 129, y + 398, 40, 30);
  ellipse(x + 133, y + 448, 20, 15);
  ellipse(x + 262, y + 433, 20, 15);
  ellipse(x + 76, y + 426, 40, 30);
  ellipse(x + 54, y + 385, 20, 15);
  ellipse(x - 135, y + 437, 20, 15);
}

function stars() {
  for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }
}

function startScreen() {
  fill(255, 255, 200);
  textSize(25);
  text("Help the alien land safely on the moon", 80, 160);
  textSize(50);
  text("Start Game", 150, 240);
  character(800, characterY, 0.3);
}

function gameScreen() {
  character(800, characterY, 0.3);
  characterY = characterY + velocity;
  velocity = velocity + acceleration;
}

function winScreen() {
  fill(255, 255, 200);
  textSize(50);
  text("Yay! he´s safe!", 130, 240);
  textSize(40);
  text("Click to play again", 130, 280);
  character(800, characterY, 0.3);
  //characterY = 100;
  //velocity = 0;
}

function loseScreen() {
  fill(255, 255, 200);
  text("Too bad! Click to play again", 80, 240);
  textSize(35);
  character(800, characterY, 0.3);
  characterY = 1500;
  //velocity = 0;
}

function draw() {
  background(0, 0, 0);
  moon();

  for (let i = 0; i < starX.length; i++) {
    fill(255, 255, 255, starAlpha[i] * 255);
    noStroke();
    ellipse(starX[i], starY[i], 3);
  }

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lost") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }

  if (keyIsDown(UP_ARROW)) {
    velocity = velocity - 1;
  }
  //Markus Ekerheim helped me with the line under
  if (characterY >= 1500 && velocity < 5) {
    state = "win";
    console.log(velocity);
  }

  if (characterY >= 1500 && velocity > 5) {
    state = "lost";
    console.log(velocity);
  }
}
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } /*else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "start";
  } */ else if (state === "lost") {
    state = "start";
    velocity = 0;
    characterY = -400;
  } else if (state === "win") {
    state = "start";
    velocity = 0;
    characterY = -400;
  }

  console.log(state);
}
