var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;
 
//Game States
var PLAY=1;
var END=0;
var gameState=1;
 
function preload(){
 pathImg = loadImage("https://i.ytimg.com/vi/JG7J3Jpxb50/hqdefault.jpg");
 boyImg = loadAnimation("https://static.vecteezy.com/system/resources/previews/004/341/426/non_2x/schoolboy-running-to-school-semi-flat-color-character-full-body-person-on-white-arriving-late-to-class-isolated-modern-cartoon-style-illustration-for-graphic-design-and-animation-vector.jpg");
 cashImg = loadImage("https://media.istockphoto.com/videos/piles-of-paper-money-grow-up-animation-on-white-background-video-id1201429894?s=640x640");
 diamondsImg = loadImage("https://www.pngitem.com/pimgs/m/526-5266743_transparent-diamond-animated-animated-diamond-hd-png-download.png");
 jewelryImg = loadImage("https://t3.ftcdn.net/jpg/03/93/00/96/360_F_393009684_Nb1jR9QBzBmJmw0PPPduOMaJFWkRaZ2o.jpg");
 swordImg = loadImage("https://pixy.org/download/1285486/");
 endImg =loadAnimation("https://st4.depositphotos.com/9625262/19860/v/600/depositphotos_198608012-stock-video-game-word-retro-cartoon-comic.jpg");
}
 
function setup(){
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
 
 
//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("https://static.vecteezy.com/system/resources/previews/004/341/426/non_2x/schoolboy-running-to-school-semi-flat-color-character-full-body-person-on-white-arriving-late-to-class-isolated-modern-cartoon-style-illustration-for-graphic-design-and-animation-vector.jpg",boyImg);
boy.scale=0.08;
 
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
 
}
 
function draw() {
 
 if(gameState===PLAY){
 background(0);
 boy.x = World.mouseX;
  edges= createEdgeSprites();
 boy.collide(edges);
  //code to reset the background
 if(path.y > 400 ){
   path.y = height/2;
 }
   createCash();
   createDiamonds();
   createjewelry();
   createSword();
 
   if (cashG.isTouching(boy)) {
     cashG.destroyEach();
     treasureCollection=treasureCollection+50;
     }
     else if (diamondsG.isTouching(boy)) {
     diamondsG.destroyEach();
     treasureCollection=treasureCollection+100;
    
     }
     else if(jewelryG.isTouching(boy)) {
     jewelryG.destroyEach();
 
     
     treasureCollection= treasureCollection + 150;
     }
     else{
     if(swordGroup.isTouching(boy)) {
       gameState=END;
      
       
       boy.addAnimation("SahilRunning",endImg);
       
 
       boy.x=200;
       boy.y=300;
       boy.scale=0.6;
      
       cashG.destroyEach();
       diamondsG.destroyEach();
       jewelryG.destroyEach();
       swordGroup.destroyEach();
      
       cashG.setVelocityYEach(0);
       diamondsG.setVelocityYEach(0);
       jewelryG.setVelocityYEach(0);
       swordGroup.setVelocityYEach(0);
   
   }
 }
  drawSprites();
 textSize(20);
 fill(255);
 text("Treasure: "+ treasureCollection,10,30);
 }
 
}
 
function createCash() {
 if (World.frameCount % 200 == 0) {
 var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
 cash.addImage(cashImg);
 cash.scale=0.12;
 cash.velocityY = 3;
 cash.lifetime = 150;
 cashG.add(cash);
 }
}
 
function createDiamonds() {
 if (World.frameCount % 320 == 0) {
 var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
 diamonds.addImage(diamondsImg);
 diamonds.scale=0.03;
 diamonds.velocityY = 3;
 diamonds.lifetime = 150;
 diamondsG.add(diamonds);
}
}