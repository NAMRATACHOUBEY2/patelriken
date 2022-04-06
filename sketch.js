var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = "RED";
}

function draw()
{
 background("BLACK");
 drawSprites();
 fill('BLUE');
 text("Click anywhere to move the box",100,200);
 if(mouseIsPressed){
    box.velocityY=3; 
    box.velocityX=3;
 }
}
 

