function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  //noStroke();
  //noFill();
  //let c = color(255, 30,50);
  //fill(255, 30,50);
}

function draw() {
  //orbitControl();

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  rotateX(millis() / 2000);
  rotateY(millis() / 2000);
  rotateZ(millis() / 2000);
  box(25, locX, locY);box(locX, locY, 25);

  fill(255);
}
