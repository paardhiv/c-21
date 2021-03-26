var movingrect, fixedrect;


function setup() {
  createCanvas(1200, 800);
  movingrect = createSprite(400, 100, 50, 50);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect.debug = true;
  fixedrect.debug = true;
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = 5
  fixedrect.velocityY = -5
}

function draw() {
  background(255, 255, 255);

  console.log(movingrect.x - fixedrect.x);
  bounceoff(movingrect, fixedrect);
  drawSprites();
}
