//Create variables here
var dog,dogImg,dogImg1,database,foodS,foodStock
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodstock=database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(20)

  dog=createSprite(250,350,10,60)
  dog.addImage(dogImg)
  dog.scale=0.2;
  
}


function draw() {  
  background("green")
  if(foodS!== undefined){
    textSize(20)
    fill(225)
    text("Note:press UP ARROW to feed tommy milk",50,50)
    text("food reamaining:"+foodS,150,150)

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImg1)
    }
    if(keyWentDown(UP_ARROW)){
      dog.addImage(dogImg)
    }
    if(foodS===0){
      foodS=20
    }
  

  drawSprites();
  }
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x+1
  }
  database.ref("/").update({
      Food:x
   });
}
function readStock(data){
  foodS=data.val();
}


