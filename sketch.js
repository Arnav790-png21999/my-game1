
var soldiersaluting,soldiersalutingimg;
var batman,batmanimg;
var background1,background1img;
var dialouge1,dialouge1img;

function preload(){
soldiersaluting=loadImage("soldiersaluting.jpg")
batman=loadImage("batman.jpg");
background1=loadImage("battleground.png");
dialouge1=loadImage("Dialouges/batdialouge1.png");
}



function setup() {
  createCanvas(1000,1000);
 // engine=Engine.create();
 // world=engine.world;


 background1img=createSprite(500,400);
 background1img.addImage(background1);
 background1img.scale=1.2;
 

 soldiersalutingimg=createSprite(300,300);
  soldiersalutingimg.addImage(soldiersaluting);
  soldiersalutingimg.scale=0.3;

  batmanimg=createSprite(550,300);
  batmanimg.addImage(batman);
batmanimg.scale=0.2;

dialouge1img=createSprite(600,150);
dialouge1img.addImage(dialouge1);
dialouge1img.scale=0.25;
}

function draw() {

  background("white");
 // Engine.update(engine); 













  drawSprites();

















}