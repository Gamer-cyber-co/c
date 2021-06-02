var bullet;
var wall;

function setup() {
  createCanvas(1536,721);
 wall = createSprite(1000,400,20,500);
 wall.shapeColor ="yellow";
  
  bullet = createSprite(100,350,40,30);
  bullet.velocityX = 30;
  bullet.shapeColor ="red"
}
function draw() {
  background("black");
  
  if(bullet.isTouching(wall)){
  bullet.velocityX=0;
bullet.shapeColor ="orange";
  }

  drawSprites();
}