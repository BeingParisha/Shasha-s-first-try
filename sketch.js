let numSegments = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
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

      // Draw shapes and lines in each segment
      drawKaleidoscopeShapes(segmentWidth, x, y);
      pop();
    }
  }
}

function drawKaleidoscopeShapes(segmentSize, offsetX, offsetY) {
  // Set up random colors for the shapes
  let fillColor = color(random(100, 255), random(100, 255), random(100, 255));
  let lineColor = color(random(100, 255), random(100, 255), random(100, 255));

  // Apply movement by using the `frameCount` variable
  let movementX = sin(frameCount * 0.01 + offsetX) * segmentSize * 0.1;
  let movementY = cos(frameCount * 0.01 + offsetY) * segmentSize * 0.1;

  // Draw random moving shapes
  fill(fillColor);
  noStroke();

  // Draw circles with movement
  ellipse(random(-segmentSize / 2, segmentSize / 2) + movementX, random(-segmentSize / 2, segmentSize / 2) + movementY, random(segmentSize * 0.1, segmentSize * 0.6));

  // Draw rectangles with movement
  rect(random(-segmentSize / 2, segmentSize / 2) + movementX, random(-segmentSize / 2, segmentSize / 2) + movementY, random(segmentSize * 0.2, segmentSize * 0.6), random(segmentSize * 0.2, segmentSize * 0.6));

  // Draw random moving lines
  stroke(lineColor);
  strokeWeight(2);
  for (let i = 0; i < 4; i++) {
    let x1 = random(-segmentSize / 2, segmentSize / 2) + movementX;
    let y1 = random(-segmentSize / 2, segmentSize / 2) + movementY;
    let x2 = random(-segmentSize / 2, segmentSize / 2) + movementX;
    let y2 = random(-segmentSize / 2, segmentSize / 2) + movementY;
    line(x1, y1, x2, y2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
