var canvas,bg;
var together;
var tom,tomImg1,tomImg2;
var jerry,jerryImg1,jerryImg2;

function preload(){
bg=loadImage("images/garden.png");
catImg1=loadAnimation("images/cat1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadAnimation("images/cat4.png");
mouseImg1=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3=loadAnimation("images/mouse4.png");

}

function setup() {
  canvas=createCanvas(870,1000);
  tom=createSprite(600,600);
  tom.addAnimation("catSleeping",catImg1);
  tom.scale=0.2;
  
  jerry=createSprite(200,600);
  jerry.addAnimation("mousestandImg",mouseImg1);
  jerry.scale=0.15;
}

function draw() {
  background(bg);
 if(tom.x-jerry.x <(tom.width =jerry.width)/2){
   tom.velocity=0;
   tom.addAnimation("catLastImage",catImg3);
   tom.x=300;
   tom.scae=0.2;
   tom.changeAnimation("catLastImage")
   jerry.addAnimation("mouseLastImage",mouseImg3);
   jerry.scale=0.15;
   jerry.changeAnimation("mouseLastImage");
} 
  drawSprites();
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
  tom.velocityx=-5;
  tom.addAnimation("catRunning",catImg2);
  tom.changeAnimation("catRunning");
    
  jerry.addAnimation("mouseleasing",mouseImg2);
  jerry.frameDelay=25;
  tom.changeAnimation("mouseleasing");
  }
}
