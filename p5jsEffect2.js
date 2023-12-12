let dia = 0;
let growAmount = 6;
let grow = true;
let angle = 0;
let angleIncrement = 0.02;
let lineLength;
let backColor;
let opacity;


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketchContainer');
    lineLength = width / 4;
}

function draw() {
  let score = localStorage.getItem('score') || 0;
  if (score == 0) {
      // Set the background color to black
      backColor = 100;
      // Set the opacity to 255
      opacity = 100;
  } else if (score == 1) {
      // Set the background color to black
      backColor = 130;
      // Set the opacity to 255
      opacity = 80;
  } else if (score == 2) {
      // Set the background color to black
      backColor = 160;
      // Set the opacity to 255
      opacity = 60;
  } else if (score == 3) {
      // Set the background color to black
      backColor = 190;
      // Set the opacity to 255
      opacity = 40;
  } else if (score == 4) {
      // Set the background color to black
      backColor = 220;
      // Set the opacity to 255
      opacity = 20;
  } else if (score == 5) {  
      // Set the background color to black
      backColor = 255;
      // Set the opacity to 255
      opacity = 0;
  } else if (score == -1) {
      // Set the background color to black
      backColor = 80;
      // Set the opacity to 255
      opacity = 130;
  } else if (score == -2) {
      // Set the background color to black
      backColor = 60;
      // Set the opacity to 255
      opacity = 160;
  } else if (score == -3) { 
      // Set the background color to black
      backColor = 40;
      // Set the opacity to 255
      opacity = 190;
  } else if (score == -4) { 
      // Set the background color to black
      backColor = 20;
      // Set the opacity to 255
      opacity = 220;
  } else if (score == -5) { 
      // Set the background color to black
      backColor = 0;
      // Set the opacity to 255
      opacity = 255;
  }

  // Continuously update the dynamic background in an animation loop
  background(backColor);
  translate(width / 2, height / 2);

  let ran = random(5, 8);

  for (let i = 0; i < 360; i += ran) {
      let randomGrowth = random(0.5, 1);
      let x1 = cos(radians(angle + i)) * dia / 2;
      let y1 = sin(radians(angle + i)) * dia / 2;
      let x2 = cos(radians(angle + i)) * (dia / 2 + lineLength * randomGrowth);
      let y2 = sin(radians(angle + i)) * (dia / 2 + lineLength * randomGrowth);

      stroke(255, 255, 255, opacity);
      strokeWeight(3.5);
      line(x1, y1, x2, y2);
  }

  if (dia > width / 3) {
      grow = false;
  }
  if (dia < 0) {
      grow = true;
  }

  if (grow == true) {
      dia += growAmount;
  } else {
      dia -= growAmount;
  }

  angle += angleIncrement;

  // // Update the scores on the webpage
  // updateScoreDisplay(score);

  // // Display backColor and opacity values on the webpage
  // document.getElementById('backColorDisplay').innerText = 'Background Color: ' + backColor;
  // document.getElementById('opacityDisplay').innerText = 'Opacity: ' + opacity;
} 

document.addEventListener('DOMContentLoaded', function () {
    const typewriter = document.getElementById('typewriter');
    const imageChoices = document.getElementById('imageChoices');
    const text = typewriter.innerText;
    typewriter.innerText = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        } else {
            document.addEventListener('click', function () {
                imageChoices.style.display = 'flex';
                typewriter.style.display = 'none';
            });
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function () {
  // Initialize the score from local storage or set it to 0
  var score = localStorage.getItem('score') || 0;
  updateScoreDisplay(score);
});

function updateScore(value) {
  // Retrieve the current score from local storage or set it to 0
  var score = parseInt(localStorage.getItem('score')) || 0;
  
  // Update the score with the provided value
  score += value;

  // Save the updated score to local storage
  localStorage.setItem('score', score);

  // Update the score display on the page
  updateScoreDisplay(score);
}

function updateScoreDisplay(score) {
  // Update the score display element
  document.getElementById('scoreDisplay').innerText = 'Score: ' + score;
}

