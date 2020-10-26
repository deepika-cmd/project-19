
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,PLAY,END

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(100,300,50,50);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
ground = createSprite(200,332,400,5)

  
  FoodGroup=createGroup();
  ObstacleGroup=createGroup();
  
  score=0;
  
   PLAY=1;
   END=0;
  gameState=PLAY;


  
}




function draw() {
background("white");

  
  if(gameState===PLAY){
  stroke("black");
  textSize(20);
  text("score: " + score,100,50);
  fill("black")
  
monkey.collide(ground);
  
monkey.velocityY=monkey.velocityY + 0.5; 
  
 if(keyDown("space") && monkey.y >= 295){
  monkey.velocityY=-11; 
   
 }  
  
  if(FoodGroup.isTouching(monkey )){
    score = score+1;
 FoodGroup.destroyEach ();
 }
 
  
  if(ObstacleGroup.isTouching(monkey)){
    
  gameState=END;
  }
  bb();
  banana();
  
  }

   
    if(gameState===END){
      
      ground.velocityX=0;
      monkey.velocityY = 0;
      ObstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      ObstacleGroup.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
      //monkey.changeAnimation("monkeyAtEnd",monkeyImage);
      
      
      
    }
    
    
    
    
    
    
    
    
  
 
  drawSprites();
}


function banana(){
  
if(frameCount % 90 == 0){
  
var banana = createSprite(400,random(140,200),3,3);
    
banana.addImage (bananaImage)
banana.scale = 0.1 ;
FoodGroup.add(banana);
banana.velocityX=-4;  
banana.lifetime=100;

}
}


function bb(){
  
 if(frameCount%100 == 0){
  var obstacle = createSprite(400,313,4,4);
  obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.lifetime=120;
   obstacle.velocityX=-4;
  ObstacleGroup.add(obstacle);
  
  
  }
}



























