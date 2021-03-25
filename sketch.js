//Create variables here
var database;
var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg;
var milkBottle2, milkImg;
var gameState;
var bedroom,garden,livingroom,washroom;

function preload(){
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
  milkImg = loadImage("milk.png");
  bedroom = loadImage("Bed Room.png");
  garden = loadImage("Garden.png");
  livingroom = loadImage("Living Room.png");
  washroom = loadImage("washroom.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  foodObj=new Food();
  
  dog = createSprite(250,250,10,10);
  dog.addImage(sadDog);
  dog.scale = 0.15;
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(20);
  
 

  milkBottle2 = createSprite(210,280,10,10);
  milkBottle2.addImage(milkImg);
  milkBottle2.scale = 0.025;
  milkBottle2.visible = false;

}


function draw() { 
 
  background("yellow")

  foodObj.display();
  writeStock(foodS);

  if(foodS == 0){
    dog.addImage(happyDog);
    milkBottle2.visible=false;
  }else{
    dog.addImage(sadDog);
    milkBottle2.visible=true;

    
  }
  
  
 
    
    
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
 
  
  database.ref('/').update({
    'foodStock': x
  })
}

