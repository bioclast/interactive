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


  rotateX(millis() / 3000);
  rotateY(millis() / 3000);

  box(100, 40, 40);
  box(40, 100, 40);
  box(40, 40, 100);
  //rod 25

  box(200, 30, 30);
  box(30, 200, 30);
  box(30, 30, 200);
  //rod 25

  box(300, 20, 20);
  box(20, 300, 20);
  box(20, 20, 300);
  //rod 25

  //rotateX(millis() / 3000);
  //rotateY(millis() / 3000);
  box(400, 10, 10);
  box(10, 400, 10);
  box(10, 10, 400);
  //rod 10

  fill(255);
}
