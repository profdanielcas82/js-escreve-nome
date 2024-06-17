function setup() {
    createCanvas(600, 600);
    background(0);
  }
  
  function draw() {
    stroke("blue");
    fill(random(255),random(255),random(255));
    
    if (mouseIsPressed){
      circle (mouseX, mouseY, 50);
    }
  }