var ellipse;
function setup() {
  createCanvas(900,200);
ellipse=createSprite(500,500,50,50);
ellipse.shapeColor=Black;
}

function draw() {
Background(220,10,10);

if (ellipse.x<300) {
    Background(0,200,35);
}
if (ellipse.x>600) {
    Background(200,0,10);
}
ellipse.x=World.mouseX;
drawSprites();
}