//DONT LEFT CLICK IF SENSITIVE TO FLASHING LIGHTS
function setup() {
  createCanvas(400, 400);
  noStroke()
  //LERP VARIABLES
  currentColor = color(random(255), random(255), random(255)); // Initial color
  
  targetColor = color(random(255), random(255), random(255)); // Target color
  
  currentWidth = random(10, 255);
  
  targetWidth = random(10, 105);
  
}

function draw() {
 //LERP FUNCTIONS
  currentColor = lerpColor(currentColor, targetColor, 0.05)
  if (frameCount % 60 === 0) {
  targetColor = color(random(255),  random(255), random(255));
  }
  
  currentWidth = lerp(currentWidth, targetWidth, 0.05)
  if (frameCount % 60 === 0) {
  targetWidth = random(10, 100);
  }
  
  //VARIABLES FOR RANDOM
  
  
  let x = random(0, 255);
  let f = random(0, 20);
 background(220);
   if (mouseIsPressed) {
    frameRate(15);
  } else {
    frameRate(30);
  }
    if (mouseIsPressed) {
    blendMode(DIFFERENCE)
  } else {
    blendMode(BLEND)
  }

  
   // VARIABLES FOR FACE
  
  let minX = 100;
  let maxX = 300;
  let minY = 0;
  let maxY = 300;
  let X = width / 2;
  let Y = height / 1.5;
  let eyeWidth = random(100,300)
  let faceSize = random(0, 300);
  let eyeSize = random(10, 200);
  let mouthX = width / 2; // X 
  let mouthY = height / 2 + 50; // Y 
  let mouthWidth = 100; 
  let mouthHeight = 50; 
  let smile = true; 
   faceColor = color(random(255),        random(255), random(255));
   //
   eyeColor = color(5);
  dice = random(0,255)
  
  let faceCorner = mouseX/10+10;  

  push()
  fill(currentColor)
  rectMode(CENTER);
  rect(width/2, height/2, 350, 300, faceCorner);
  pop()
  
  push()
      if (mouseIsPressed)
  {noStroke()
   
  }else{
  stroke(255)
  strokeWeight(25)
  }
   
  // Constrain mouseX and mouseY
  let constrainedX = constrain(mouseX, minX, maxX);
  let constrainedY = constrain(mouseY, minY, maxY);
  
  scale(0.5);
  translate(20,0)
  fill(255);
  ellipse(X, Y, constrainedX, constrainedY);
  
  
  fill(eyeColor);

  ellipse(X, Y, constrainedX, constrainedY);
 pop()
  
  
  /////MOUSEPRESSED FUNCTIONS
  push()
    if (mouseIsPressed)
  {noStroke()
  }else{
  stroke(255)
  strokeWeight(25)
  }
  scale(0.5);
  translate(380,0)
  fill(255);
  ellipse(X, Y, constrainedX,       constrainedY);
  fill(eyeColor);
  ellipse(X, Y, constrainedX,       constrainedY);
pop()
 
  push()
  fill(currentColor)
  
  triangle(currentWidth*4, 20, 275, 50, 130,50 );
 
 
  pop()
  
  
  
  r = random(0, 255)
  rPi = random(PI, TWO_PI)
 push()
  if (mouseIsPressed) {
    
  
    arc(mouthX, mouthY, r, mouthHeight, 0, PI);  
  } else {
    fill(-currentColor); 
    
    arc(mouthX, mouthY, currentWidth, mouthHeight, PI, TWO_PI);
    pop()
  }
  
}

