let dia = 0;
let growAmount = 6;
let grow = true;
let angle = 0;
let angleIncrement = 0.02;
let lineLength;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketchContainer');
  lineLength = width/4;
  canvas.style('z-index', '-1');
}

function draw() {
    let row2Element = select('.row2');
    if (row2Element) {
        // Only draw when .row2 is present
        background(0);
        translate(width / 2, height / 2);
      
        let ran = random(5,8);
        
        for (let i = 0; i < 360; i += ran) {
          let randomGrowth = random(0.5, 1);
          let x1 = cos(radians(angle + i)) * dia / 2;
          let y1 = sin(radians(angle + i)) * dia / 2;
          let x2 = cos(radians(angle + i)) * (dia / 2 + lineLength * randomGrowth);
          let y2 = sin(radians(angle + i)) * (dia / 2 + lineLength * randomGrowth);
      
          stroke(255,255,255,170);
          strokeWeight(3.5);
          line(x1, y1, x2, y2);
        }
      
        if (dia > width/3) {
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
    }
}
