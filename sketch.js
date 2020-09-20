
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score,ground
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}


function draw() {
background("cyan");
  
  if(ground.x<450){
    ground.x = ground.width/2;
    console.log(ground.x);
  }
  
  //makes monkey jump
  if(keyDown("space")&& monkey.y >=225){
    monkey.velocityY = -12;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY+1;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score,500,50);
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime,100,50);
  
  food();
  obstacles();
  
  monkey.collide(ground);
  drawSprites();
}

function food(){
  
  if(frameCount %80 === 0){
  banana = createSprite(400,Math.round(random(120,200)),20,20);
  banana.addImage(bananaImage);
  banana.lifetime = 150;
  banana.velocityX = -4; 
  banana.scale = 0.1  
  bananaGroup.add(banana);
  }
}

function obstacles(){
  
  if(frameCount %300 === 0){
    obstacle = createSprite(400,315,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
  
  
}




