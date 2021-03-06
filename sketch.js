var movingbox,fixedbox







function setup() {
  createCanvas(800,400);
  movingbox=createSprite(400, 200, 50, 80);
  movingbox.shapeColor="gold"
  fixedbox=createSprite(200, 200, 80, 30);
  fixedbox.shapeColor="gold"
}


function draw() {
  background(255,255,255);  
movingbox.x=mouseX
movingbox.y=mouseY
if(movingbox.x-fixedbox.x<fixedbox.width/2+movingbox.width/2&&
  fixedbox.x-movingbox.x<fixedbox.width/2+movingbox.width/2&&
  movingbox.y-fixedbox.y<fixedbox.height/2+movingbox.height/2&&
 fixedbox.y-movingbox.y<fixedbox.height/2+movingbox.height/2){
  movingbox.shapeColor="green"
  fixedbox.shapeColor="green"
}
else{
  movingbox.shapeColor="gold"
  fixedbox.shapeColor="gold"
}
  drawSprites();
}