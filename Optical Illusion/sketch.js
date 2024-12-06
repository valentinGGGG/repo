let goldenRatio = 1.618;
//let numSquares = 10;
let initialSize = 5;

function setup() {
  createCanvas(800, 800);

  rectMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    sV = 1;
    // blendMode(DIFFERENCE)
  } else {
    sV = 0;
    // blendMode(BLEND)
  }
  //ROUNDED MAPPED MOUSEX VAL
  let mappedValue = constrain(map(mouseX, 0, width, 1, 15), 1, 15);
  let mP = round(mappedValue);

  //print(mappedValue,c)
  let x = width / 2;
  let y = height / 2;

  //FOR LO
  for (let i = mP; i >= 1; i--) {
    sZ = initialSize * pow(goldenRatio, i);

    //MODULO FOR BLINK FILL
    if (i % 2 == sV) {
      fill(255);
      stroke(255);
    } else {
      fill(0);
      stroke(0);
    }

    //for ( let i = 0; i < 30; i++)
    push();
    // print(sZ)

    translate(400, 400);
    rotate(radians(frameCount / 5));
    //CHANGE THE DIVISIBLE
    rect(x / 3, y / 3, sZ / 2, sZ / 2);
    rect(-x / 3, -y / 3, sZ / 2, sZ / 2);
    //  rect(x/6, y/3, sZ/2, sZ/2);
    //rect(-x/6,-y/3, sZ/2, sZ/2);
    pop();

    push();
    translate(400, 400);
    rotate(radians(-frameCount / 2));
    //CHANGE THE DIVISIBLE

    //circle(x/3,y/1.5,sZ/2)
    //circle(-x/3,-y/1.5,sZ/2)
    circle(x / 3, y / 1.5, sZ / 2);
    circle(-x / 3, -y / 1.5, sZ / 2);
    pop();
  }
  //     }else{}
  //     push()
  //     translate(400,400)
  //     rotate(radians(frameCount/5))
  //     //CHANGE THE DIVISIBLE
  //     rect(x/3, y/3, sZ, sZ);
  //      rect(x/3,- y/3, sZ, sZ);

  //     //circle(x/3,-y/1.5,sZ)
  //     pop()

  //circle(x*1.5,y/2,sZ)

  //circle(x/2,y*1.5,sZ)

  // circle(x*1.5,y*1.5,sZ)
}
