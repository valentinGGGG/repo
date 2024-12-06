function setup() {
  createCanvas(400, 300);
  background(255);
  angleMode(DEGREES)
  
}

function draw() {
   
  fill(0, 0, 0); 
  stroke(0); 
  strokeWeight(2);
  
  rect(100, 100, 200, 100, 50);
  fill(255,255,255);
  
  //left bump
  push()
  fill(0,0,0)
  translate(135,100)
  rotate(-12)
  ellipse(0, 0, 50, 10, 50);
  pop()
  
  //right bump
  push()
  fill(0,0,0)
  translate(265,100)
  rotate(12)
  ellipse(0, 0, 50, 10, 50);
  pop()
  
  //left buttons
  

  
  
  
  
  
  ellipse(200, 120, 200, 50, 50);
  
  //right ell
  push()
  translate(300  ,180)
  rotate(75)
  ellipse(0, 0, 150, 60)
  pop()
  
  //left ell
  push()
  translate(100  ,180)
  rotate(-75)
  ellipse(0, 0, 150, 60)
  pop()
 
  //button top
  push()
  translate(105,140)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
 
  //button right
  push()
  translate(120,160)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
  
  //button left
  push()
  translate(90,160)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
 
  //button bottom
  push()
  translate(105,180)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop() 
 
  //arrow up
  push()
  fill(0)
  translate(96.5,132)
  triangle(30/7, 75/7, 58/7, 20/7, 86/7, 75/7);
  pop()
  
  //arrow right
  push()
  fill(0)
  translate(128,152)
  rotate(90)
  triangle(30/7, 75/7, 58/7, 20/7, 86/7, 75/7);
  pop()
 
  //arrow down
  push()
  fill(0)
  translate(113,188)
  rotate(180)
  triangle(30/7, 75/7, 58/7, 20/7, 86/7, 75/7);
  pop()
  
  //arrow left
  push()
  fill(0)
  translate(82,168)
  rotate(270)
  triangle(30/7, 75/7, 58/7, 20/7, 86/7, 75/7);
  pop()
  
  //JOYSTICKS
  push()
  ellipse(170,170,30,30)
  pop()
  push()
  ellipse(170,170,20,20)
  pop()  
  push()
  ellipse(230,170,30,30)
  pop()
  push()
  ellipse(230,170,20,20)
  
  
  pop()  
  //RIGHT BUTTONS
  
  //button top
  translate(190,0)
  push()
  translate(105,140)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
  
  //button right
  push()
  translate(120,160)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
  
  //button left
  push()
  translate(90,160)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop()
  
  //button bottom
  push()
  translate(105,180)
  rotate(0)
  ellipse(0, 0, 15, 15, 50);
  pop() 
  
  //ICONS
  //trianle
  push()
  translate(96.5,132)
  triangle(30/7, 75/7, 58/7, 20/7, 86/7, 75/7);
  pop()
  
  //circle
  push()
  translate(120,160)
  rotate(0)
  ellipse(0, 0, 7, 7, 50);
  pop()
  
  //x
  push()
  
  let x1 = 100; 
  let y1 = 100; 
  let x2 = 300; 
  let y2 = 300; 
  
  stroke(0);
  strokeWeight(30); 
  translate(95,170)
  scale(.05)
  
  line(x1, y1, x2, y2);
  line(x1, y2, x2, y1);
  pop()
  
  //squareee
  push()
  square(87.5,157.5,5)
  pop()
  
  push()
  
  
}
