let fr;
let vid;
let vid2;
let vid3;
let vid3text;
let vid2Playing = false;
let vid2New; 
let vid2NewPlaying = false; 
let vid2NewBlend; // 
let vid2NewBlendPlaying = false; 
let fr2;
let imgToReveal;
let imgX = 265;
let imgY = 100;
let imgRadius = 100;
let finalImage; 
let scene3text;
let scene = 1;
let transitionProgress = 0;
let transitionSpeed = 0.05;
let finalVid;
let startColor = [220, 220, 220];
let endColor = [50, 50, 200];

// Game variables for Scene 3
let icon;
let x, y;
let radius = 50;
let interval;
let intervalTime = 1000;
let score = 0;
let outsideClickCount = 0;
const maxOutsideClicks = 5;
let playing = true;
let sceneNum = 0; // Game scene variable

function preload() {
  ex = loadImage("demon1.png"); 
  finalImage2 = loadImage("TBC.png")
}

function jump() {
  // random jumping
  x = random(radius, width - radius);
  y = random(radius, height - radius);
}

function setup() {
  createCanvas(1080 / 2, 720 / 2); // Main canvas
  fr = 1;

  // Original video (background for Scene 1)
  vid = createVideo("road crt post fx-1.mp4");
  vid.size(width, height);
  vid.volume(0);
  vid.loop();
  vid.hide();

  // Overlay video (used in scene 1)
  vid2 = createVideo("Road Crt Post Fx compress (1).mp4");
  vid2.size(width, height);
  vid2.volume(0);
  vid2.hide();

  // New video for Scene 2 background
  vid2New = createVideo(
    "Plead The Blood Marsh Footage Radial Blur Real Faker 1(2).mp4"
  );
  vid2New.size(width, height);
  vid2New.volume(0);
  vid2New.hide();

  // New video to blend on top in Scene 2
  vid2NewBlend = createVideo(
    "Plead The Blood Marsh Footage Radial Blur Real Faker 3.mp4"
  ); // Blending video for Scene 2
  vid2NewBlend.size(width, height);
  vid2NewBlend.volume(0);
  vid2NewBlend.hide();

  vid3 = createVideo("Firestorm1.mp4");
  vid3.size(width, height);
  vid3.volume(0);
  vid3.loop();
  vid3.hide();
  // Final image to be displayed after both videos finish
  finalImage = loadImage(
    "plead the blood marsh footage radial blur real faker.00_01_17_44.Still001.png"
  ); // Replace with your desired image
  vid3text = createVideo(
    "plead the blood marsh footage radial blur real faker_4.mp4"
  );
  vid3text.size(width, height);
  vid3text.volume(0);
  vid3text.loop();
  vid3text.hide();

  finVidtext = createVideo("YOU CARE.mp4");
  finVidtext.size(width, height);
  finVidtext.volume(0);
  finVidtext.loop();
  finVidtext.hide();
  
   finalVid = createVideo("Fire Flower2.mp4");
  finalVid.size(width, height);
 finalVid.volume(0);
  finalVid.hide();
  
  imgToReveal = loadImage("findhometxt.png");

  // Initialize game for Scene 3
  resetSketch();
}

function draw() {
  background(
    lerpColor(
      color(startColor[0], startColor[1], startColor[2]),
      color(endColor[0], endColor[1], endColor[2]),
      transitionProgress
    )
  );

  if (scene === 1) {
    handleDefaultScene();
  } else if (scene === 2) {
    handleNewScene();
  } else if (scene === 3) {
    handleGameScene(); // Start the game in Scene 3
  } else if (scene === 4) {
    handleFinalScene();
  }
}

function handleDefaultScene() {
  let img = vid.get();
  image(img, 0, 0);

  if (fr > 5 && fr <= 80) {
    if (!vid2Playing) {
      console.log("Starting overlay video...");
      vid2.play(); // Play the second video
      vid2Playing = true;
    }

    let img2 = vid2.get();
    blendMode(SCREEN);
    image(img2, 0, 0);
    blendMode(BLEND);
  } else {
    if (vid2Playing) {
      console.log("Pausing overlay video...");
      vid2.pause();
      vid2Playing = false;
    }
  }

 // fr = 81;
 if (keyIsDown(87)) {
    fr += .1;
    fr2 = constrain(fr, 0, 30);
    frameRate(fr2);
    console.log(fr);
    console.log(fr2);
  } else {
    frameRate(fr);
    //console.log(fr);
   // console.log(fr2);
  }
  if (fr > 80) {
    if (vid2Playing) {
      console.log("Pausing overlay video due to fr > 100...");
      vid2.pause();
      vid2Playing = false;
    }

    let distance = dist(mouseX, mouseY, imgX, imgY - 150);
    if (distance < imgRadius) {
      image(
        imgToReveal,
        imgX - imgRadius,
        imgY - imgRadius,
        imgRadius * 2,
        imgRadius
      );

      if (mouseIsPressed && distance < imgRadius) {
        scene++;
        transitionProgress = 0; // Start the transition for Scene 2
      }
    }
  }
}

function handleNewScene() {
  if (transitionProgress < 1) {
    transitionProgress += transitionSpeed;
  }

  if (transitionProgress >= 1 && !vid2NewPlaying) {
    console.log("Starting new background video for Scene 2...");
    vid2New.play();
    vid2NewPlaying = true;
  }

  let img2New = vid2New.get();
  image(img2New, 0, 0);

  if (transitionProgress >= 1 && !vid2NewBlendPlaying) {
    console.log("Starting blend video for Scene 2...");
    vid2NewBlend.play();
    vid2NewBlendPlaying = true;
  }

  let img2NewBlend = vid2NewBlend.get();
  blendMode(SCREEN);
  image(img2NewBlend, 0, 0);
  blendMode(BLEND);

  if (
    vid2New.time() >= vid2New.duration() &&
    vid2NewBlend.time() >= vid2NewBlend.duration()
  ) {
    background(0); // Black background to cover the paused videos
    let finalImageWidth = width;
    let finalImageHeight =
      (finalImage.height / finalImage.width) * finalImageWidth; // Keep the aspect ratio intact
    image(finalImage, 0, 0, finalImageWidth, finalImageHeight);

    if (mouseIsPressed) {
      let finalImageX = 0;
      let finalImageY = 0;

      if (
        mouseX > finalImageX + 80 &&
        mouseX < finalImageX + 180 &&
        mouseY > finalImageY + 190 &&
        mouseY < finalImageY + 250
      ) {
        console.log(
          "Mouse clicked within the detection area, switching to Scene 3."
        );
        scene = 3; // Move to Scene 3 when clicked within the detection area
      }
    }
  }
}

let iconClicked = false; // Track whether the icon has been clicked initially

function handleGameScene() {
  background(220); // Set background for the game scene
  let img3New = vid3.get();
  image(img3New, 0, 0);
  // Display the text video if the icon hasn't been clicked yet
  if (!iconClicked) {
    let img3New = vid3text.get();
    image(img3New, 0, 0);
  }

  // Display the icon at its current position
  image(ex, x - radius, y - radius, radius * 2, radius * 2);

  // Display score and other game-related text
  fill(0);
  textSize(24);
  text(`Score: ${score}`, 10, 30);
  text(`Outside Clicks: ${outsideClickCount}`, 10, 60);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);

  // Check if the icon is clicked
  if (d < radius) {
    if (!iconClicked) {
      // On the first click, disable the video and start jumping
      iconClicked = true;
      playing = false; // Hide the text video
      interval = setInterval(jump, intervalTime); // Start the jump logic
    } else {
      // Subsequent clicks: update the score and move the icon
      score += 50;
      jump();
      intervalTime = max(100, intervalTime - 150); // Increase game speed
      clearInterval(interval);
      interval = setInterval(jump, intervalTime); // Restart the jump interval
      outsideClickCount = 0; // Reset the outside click count
      if (score > 299) {
        console.log("Score exceeds 300, transitioning to Scene 4");
        scene = 4;
      }
    }
  } else {
    // Handle outside clicks
    outsideClickCount++;
    if (outsideClickCount >= maxOutsideClicks) {
      resetSketch();
    }
  }
}

function resetSketch() {
 
  score = 0;
  outsideClickCount = 0;
  intervalTime = 1000;
  x = width / 2; 
  y = height / 2; 
  clearInterval(interval);
  iconClicked = false; 
  playing = true; 
}


let finalImage2; // Variable to store the PNG image
let finalVidFinished = false; // Track whether finalVid has finished playing
let finalImageX = 100; // X position of final image (adjust as needed)
let finalImageY = 100; // Y position of final image (adjust as needed)
let finalImageRadius = 150; // Radius to detect click on final image


function handleFinalScene() {
  let img4New = finVidtext.get();
  image(img4New, 0, 0);
  image(ex, 220, 125, radius * 2, radius * 2);

  // Check if finVidtext has finished playing and start finalVid if it's not already playing
  if (finVidtext.time() >= finVidtext.duration() && !finalVid.time()) {
    console.log("img4New finished, starting finalVid.");
    finalVid.play();
  }

  // Display finalVid if it's playing
  if (finalVid.time() > 0) {
    let imgNewVid = finalVid.get();
    image(imgNewVid, 0, 0);
  }

  // Check if finalVid has finished playing
  if (finalVid.time() >= finalVid.duration() && !finalVidFinished) {
    console.log("finalVid finished, displaying the PNG image.");
    finalVidFinished = true; // Mark that finalVid has finished playing
  }

  // Display the PNG image after finalVid is finished
  if (finalVidFinished) {
    image(finalImage2, 0, 0, width, height); // Display PNG at full canvas size
     let distance = dist(mouseX, mouseY, finalImageX + finalImageRadius, finalImageY + finalImageRadius);
    if (mouseIsPressed && distance < finalImageRadius) {
      console.log("Mouse clicked within the radius, resetting scenes to 1.");
      resetSketch(); // Reset the scene and game state
      scene = 1; // Reset to Scene 1
    }
  }
}