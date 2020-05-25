var girl,girlImage;
var mythEaterImage,mythEater;
var background1Image,background1;
var background2Image,background2;
var play,store;
var gameState = "level1";
var expell = 0,incarsious = 1;killer = 2,protego = 3;
var charms1,charms2,charms3,charms4;
var check = 0;
var l1,l2,l3,l4,l5,l6;
var rand,num1 = 0,num2 = 0,num3 = 0,num4 = 0; 
function preload() {
  girlImage = loadImage("character2.png");
  background1Image = loadImage("dungon.jpg");
  background2Image = loadImage("bg.png");
  mythEaterImage = loadImage("enemy.png");
}
function setup() {
  createCanvas(1600,1200);
  background1 = createSprite(600,400,1600,1200);
  background1.addImage("background1",background1Image);
  background1.scale = 5.5;
  background2 = createSprite(700,300,1600,1200);
  background2.addImage("background2",background2Image);
  background2.visible = false;
 mythEater = createSprite(1200,300,50,50);
  mythEater.addImage(mythEaterImage);
  mythEater.visible = false;
  
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage);
  girl.scale = 0.5;

  l1 = createSprite(400,170,20,20);
  l1.shapeColor = "red";
  l2 = createSprite(370,170,20,20);
  l2.shapeColor = "red";
  l3 = createSprite(430,170,20,20);
  l3.shapeColor = "red";
  l4 = createSprite(1200,170,20,20);
  l4.shapeColor = "red";
  l5 = createSprite(1230,170,20,20);
  l5.shapeColor = "red";
  l6 = createSprite(1170,170,20,20);
  l6.shapeColor = "red";

  


  play = createSprite(1100,300,100,50);
  store = createSprite(1100,400,100,50)

  
}

function draw() {
  background("black"); 
  if(gameState === "level1"){
    
  }
 

  if(mousePressedOver(play)){
    gameState = "level2" ;
    background2.visible = true;
    play.visible = false;
    store.visible= false;
    girl.y = 300;
    background1.visible = false;
    mythEater.visible = true;

  }
  
  if(gameState === "level2") {
    expell = createButton('expell');
    expell.position(400,400);
    kill = createButton('kill');
    kill.position(350,400);
    incarsious = createButton('incarsious');
    incarsious.position(400,450);
    protego = createButton('protego');
    protego.position(330,450);
    expell.mousePressed(function(){
      charms1 = createSprite(425,290,15,15);
      charms1.shapeColor = "red";
      check = 1;
      charms1.velocityX = 7;
      num1 = 1;
      
    
    })
    kill.mousePressed(function(){
      charms2 = createSprite(425,290,15,15);
      charms2.shapeColor = "green";
      check = 1;
      charms2.velocityX = 7;
      num2 = 1;

    })
    incarsious.mousePressed(function(){
      charms3 = createSprite(425,290,15,15);
      charms3.shapeColor = "brown";
      check = 1;
      charms3.velocityX = 7;
      num3=1;

    })
    protego.mousePressed(function(){
      charms4 = createSprite(450,290,30,30);
      charms4.shapeColor = "blue";
      check = 1;
      num4 = 1;
      

    })

    if(check === 1){
      rand = Math.round(random(1,3));
      if(rand === 1){
        expell = createSprite(1170,290,15,15);
        expell.velocityX = -7;
        expell.shapeColor = "red";
        check = 0;
      }
      else if(rand === 2){
        kill1 = createSprite(1170,290,15,15);
        kill1.velocityX = -7;
        kill1.shapeColor = "green"
        check = 0;
        
      }
      else if(rand === 3){
        incarsious1 = createSprite(1170,290,15,15);
        incarsious1.velocityX = -7;
        incarsious1.shapeColor = "brown";
        check = 0;
      }


    }
    if(num1 === 1 && rand === 2 ){
    l4.destroy();

    } 
    if(num1 === 1 && rand ===3){
      l5.destroy();
    }





  }



  
  drawSprites();
}