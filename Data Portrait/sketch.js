NOISE_SCALE = 1 / 50;
const SUN = "#eded47";
const MON = "#ed475d";
const TUES = "#4763ed";
const WED = "#e6bc25";
const THURS = "#7f25e6";

//let aMap = null;

function setup() {
    pixelDensity(1);
    createCanvas(1080, 1080);
   
   // noiseDetail(5, 0.5);
    
    
    makeMap();
    drawMap();
  
}
//COLOR MAP USING NOISE
function makeMap() {
  
  //x and y cords map - size of canvas
    // aMap = new Array(width * height);
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            map[i + j * width] = pickColor(i, j);
        }
    }
}

function pickColor(i, j) {
    let h =  noise(i * NOISE_SCALE, j * NOISE_SCALE);
    const thresholds = [0.15, 0.22, 0.3, 0.48, 0.9];
    const colors = [THURS, WED, TUES, MON,  SUN, ];
  //print(h);
    for (let k = 0; k < thresholds.length; k++) {
        if (h < thresholds[k]) {
            return color(colors[k]);
        }
    }
  
}

function drawMap() {
    loadPixels();
    for (let c = 0; c < width; c++) {
        for (let b = 0; b < height; b++) {
            set(c, b, map[c + b * width]);
        }
    }
    updatePixels();
  
  //https://www.youtube.com/watch?v=VtpF-m3KyEk
  
}
