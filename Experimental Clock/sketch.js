let lastChangeTime = 0; 
let strokeValue = 0; // Initial stroke value
let strokeValue2 = 0
let strokeValue3 = 0
function setup() {
  createCanvas(600, 600);
 background(0)
}

function draw() {
 
//blendMode(SCREEN);
//comment nofill out below for crazy effect
  noFill()

//MILLIS, FREQ, AMP VAR
  let m = millis();
  let frequency = map(sin(m * .1), -1, 1, .01, 1); 
  let amplitude = map(sin(m * .001), -1, 1, 0, 300); 

  // RANDOM VALUES FOR COLOR , CHANGING EVERY SEC
  if (m - lastChangeTime > 1000) { 
    strokeValue = random(0, 255); 
    strokeValue2 = random(0, 255);
    strokeValue3 = random(0, 255);
    
    lastChangeTime = m; 
  }

  stroke(amplitude,strokeValue3,strokeValue); 

  // SIN WAVE LOOP/FORMULA(originally referenced from https://editor.p5js.org/stevenraysimon/sketches/HyTseadOg)
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = height / 2 + sin(m * 0.002 + x * frequency) * amplitude;
    vertex(x, y);
  }

  
  endShape();
}
