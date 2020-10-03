//monkey variable
var monkey , monkeyRunning;

//banana variable; 
var banana ,bananaImage;

//obstacle variable
var obstacle, obstacleImage;

//ground variable
var ground,groundImage;

//variable for the scores
var bananaGroup, obstaclesGroup;

//variable to hold the score
var survivalTime=0;


function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //load the images for the banana and the obstacles
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,10,10);
  monkey.addAnimation("moving", monkeyRunning);
  monkey.scale=0.15;
  
  
  //making the ground a createSprite
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/ 2;

  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
background("lightBlue");
  
  //make infinitely moving ground
      if (ground.x < 0){
      ground.x = ground.width/ 2;
      ground.velocityX=5 ;
    }

  //make the monkey jump when space is pressed
  if(keyDown("space")&& monkey.y >=280){
    monkey.velocityY=-15;
  }
  
  

//make the gravity
  monkey.velocityY=monkey.velocityY + 0.73;
  
//make the ground collide with the monkey
  monkey.collide(ground);
  

  
  fill("green");
  textSize(20);
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival time: " + survivalTime,115,50);
  
 
  
  //call all the functions
  food();
  obstacles();
  
  drawSprites();
  
}

function food(){

  if(frameCount % 80 === 0){
  var banana=createSprite(400,150, 10,10);
  banana.addImage(bananaImage);
  banana.lifetime=150;
  banana.scale=0.1
  banana.y=Math.round(random(120,200));
  banana.velocityX=-4;
  bananaGroup.add(banana);
}

}

function obstacles(){

  if(frameCount % 300 === 0){
    var obstacle=createSprite(400,320,30,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.17;
    obstacle.lifetime=150;
    obstacle.velocityX=-5;
    obstaclesGroup.add(obstacle);
    
  }
  }

