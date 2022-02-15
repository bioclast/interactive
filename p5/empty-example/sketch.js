let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  fill(204)
  ellipse(x, y, 30, 30);
}
