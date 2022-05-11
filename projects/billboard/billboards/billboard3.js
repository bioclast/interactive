// HTML Select option object:
let portSelector;
let serial;          // variable to hold an instance of the serialport library
let portName = '/dev/tty.usbmodem101';  // fill in your serial port name here
let inData;                             // for incoming serial data

function setup() {
  createCanvas(500, 500, WEBGL);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  //serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}

let options = { baudrate: 9600}; // change the data rate to whatever you wish
serial.open(portName, options);

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
 inData = Number(serial.read());
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function draw() {
    //background(inData, inData, 50);

    background(255);
    fill(255);
    //text("sensor value: " + inData, 30, 50);

    //rotateX(millis() / inData);rotateY(millis() / inData);
    rotateX(millis() / 3000);rotateY(millis() / 3000);

    box(inData*2, 5, 5);
    box(5, inData*2, 5);
    box(5, 5, inData*2);

    //translate(inData, 0);torus(inData, 5);

    rotateY(inData);
    torus(inData, 5);

    //translate(-inData, 0);rotateY(90);torus(inData, 5);

    //box(200, 30, 30);box(30, 200, 30);box(30, 30, 200);

    //box(300, 20, 20);box(20, 300, 20);box(20, 20, 300);

    //box(400, 10, 10);box(10, 400, 10);box(10, 10, 400);
}
