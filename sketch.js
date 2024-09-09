let numSegments = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(80); // Increased text size for better visibility
  frameRate(30); // Increased frame rate for a more dynamic effect
}

function draw() {
  background(0); // Black background

  let segmentWidth = width / numSegments;

  // Loop through each segment across the screen horizontally
  for (let x = 0; x < numSegments; x++) {
    let segmentX = x * segmentWidth;

    // Loop to cover the screen vertically
    for (let y = 0; y < numSegments; y++) {
      let segmentY = y * segmentWidth;

      push();
      translate(segmentX + segmentWidth / 2, segmentY + segmentWidth / 2);

      // Randomly flip segments to simulate the "broken mirror" effect
      if (random() > 0.5) {
        scale(1, -1); // Flip vertically
      }
      if (random() > 0.5) {
        scale(-1, 1); // Flip horizontally
      }

      // Draw lightning effect in each segment
      drawKaleidoscopeLightning(segmentWidth);
      pop();
    }
  }
}

function drawKaleidoscopeLightning(segmentSize) {
  // Apply dynamic movement by using sinusoidal functions
  let movementX = sin(frameCount * 0.05) * segmentSize * 0.2;
  let movementY = cos(frameCount * 0.05) * segmentSize * 0.2;

  // Generate dynamic lightning effect with flashing and color changes
  noStroke();
  let alpha = map(sin(frameCount * 0.1), -1, 1, 100, 255);
  let lightningColor = color(random(150, 255), random(150, 255), random(150, 255)); // Neon colors

  // Set color and transparency for lightning effect
  fill(lightningColor.levels[0], lightningColor.levels[1], lightningColor.levels[2], alpha);

  // Draw lightning effect
  let numBolts = 5;
  for (let i = 0; i < numBolts; i++) {
    let startX = random(-segmentSize / 2, segmentSize / 2);
    let startY = random(-segmentSize / 2, segmentSize / 2);
    let endX = startX + random(-segmentSize / 4, segmentSize / 4);
    let endY = startY + random(-segmentSize / 4, segmentSize / 4);

    line(startX + movementX, startY + movementY, endX + movementX, endY + movementY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
