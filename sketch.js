// Click and Drag an object

var dragging = false; // Is the image being dragged?

var x = 100; // x pos of image
var y = 100; // y pos of image
var w = 180; // width pos of image
var h = 240; // height pos of image

var offsetX;    // Mouseclick offset Y
var offsetY;    // Mouseclick offset Y

var kitten; // variable for image

function preload(){
  //load in image
  // you should load your file from your assets folder as usual
  kitten = loadImage("https://cdn.glitch.com/17dc374b-8f0a-4ab9-95b2-d95c66ceee9d%2Fkitten.jpg?1525412876816");
}

function setup() {
  createCanvas(960,540);
}

function  draw() {
  background(180);

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  // draw the image
  image(kitten,x, y, w, h);

  //draw an ellipse as out goal drop area
  ellipse(800,260,100,100);
}


function mousePressed() {
  // Did I click on the image?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {


  // test if we are stopping our drag within the drop zone (the mouse is within the circle area when we release the mouse button)
  // we are asking if the distance between the centre of the drop circle and the mouse is greate than 50 pixels
  // if so lets pop the image back to its original spot
  // otherwise it iut remain in the drop zone

  if(dist(mouseX,mouseY,800,260) > 50){
    x = 100;
    y = 100;
  }
  else{
    print("dropped in the drop zone");
    // put anything here that should happen when the image is dropped in the right place
  }

  // Quit dragging
  dragging = false;
}
