let video;
let noiseScale = 500;
let ellipseX, ellipseY;

function setup() {
  createCanvas(800, 600);
  video = createVideo(['road crt post fx.mp4']);
  video.hide(); 
  video.loop(); 

  noCursor(); 
 
  // Initial position of the ellipse
  ellipseX = width / 2;
  ellipseY = height / 2;
}

function draw() {
 
  background(0);
 video.loadPixels();
  // Move the ellipse with WASD
  if (keyIsDown(87)) { // W key
    ellipseY -= 5;
  }
  if (keyIsDown(83)) { // S key
    ellipseY += 5;
  }
  if (keyIsDown(65)) { // A key
    ellipseX -= 5;
  }
  if (keyIsDown(68)) { // D key
    ellipseX += 5;
  }

  noStroke();
  fill(0, 0, 0, 100); 
  ellipse(ellipseX, ellipseY, 30, 60);
  let mappedValue = constrain(map(ellipseX, 0, width, 5, 50), 5, 50);
  let mP = round(mappedValue);
  for (let x = 0; x < width; x += 5) { 
    for (let y = 0; y < height; y += 5) {
      
      let d = dist(ellipseX, ellipseY, x , y ); 

      // radius determination
      if (d <=  30) {
        // noise based on pixel position
        let noiseVal = noise(x * noiseScale, y * noiseScale) * random(0, 800);

        let offsetX = floor(noiseVal % video.width);
        let offsetY = floor(noiseVal % video.height);

        let index = (offsetX + offsetY * video.width) * 15; 
        let r = video.pixels[index];
        let g = video.pixels[index + 1];
        let b = video.pixels[index + 2];
        let a = video.pixels[index + 3];

        fill(r, g, b, a);
        noStroke();
        rect(x, y, 5, 5); 
        
      
      }
    }
  }
}
