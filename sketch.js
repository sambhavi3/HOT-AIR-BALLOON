var balloon;

function preload(){
  background= loadImage("sprites/hot Air Ballon-01")
  balloon= loadImage("sprites/hot Air Ballon-02");
}
function setup() {
  createCanvas(500,500);
  balloon= createSprite(400, 200, 50, 50);
}

function draw() {
  background("sprites/hot Ar ballon-01");  
  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(balloon,{x:-50,y:-45});

  }
  if (keyCode === DOWN_ARROW) {

    Matter.Body.applyForce(balloon,{x:-50,y:-45});

  }
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(balloon,{x:-50,y:-45});

  }
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(balloon,{x:-50,y:-45});

  }
}
