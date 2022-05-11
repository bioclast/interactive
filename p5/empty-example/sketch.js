let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
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

  fill(153, 153, 153)
  ellipse(x, y, 30, 30);
}
