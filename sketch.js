var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
obsTop1 = loadImage("assets/obsTop1.png");
obsTop2 = loadImage("assets/obsTop2.png");
obsBottom1 = loadImage("assets/obsBottom1.png");
obsBottom2 = loadImage("assets/obsBottom2.png");
obsBottom3 = loadImage("assets/obsBottom3.png");
}
function setup(){

  createCanvas(1200,800)
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale=0.2;

  topGround = createSprite(200,10,800,20);
  
  bottomGround = createSprite(200,390,800,20);
//background image


      
}
function draw(){
  background(bgImg);
image (bgImg,0,0,width,height);
if(keyDown ("up")){
  balloon.velocityY=-6;
}
balloon.velocityY +=2;
drawSprites()
}

function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
        obstacleTop.scale = 0.1;
        obstacleTop.velocityX = -4;
        obstacleTop.y = Math.round(random(10,100));

        var rand = Math.round(random(1,2));
        switch(rand){
          case 1: obstacleTop.addImage(obsTop1);
              break;
          case 2: obstacleTop.addImage(obsTop2);
              break;
          default: break;

         obstacleTop.lifetime = 100;
    
         balloon.depth = balloon.depth + 1;
        }
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
          var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}


  
