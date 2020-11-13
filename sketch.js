//Create variables here
var Dog, happyDog
var database
 var foodS, foodStock
function preload()
{
  //load images here
  Dog= loadImage("images/dogImg.png")
  happyDog= loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250, 300, 30, 30)
  dog.addImage(Dog)
  dog.scale=0.2
  foodStock=database.ref("food");
foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)

}
fill("black")
text("Note:  Press Up Arrow Key To Feed Drago Milk!", 120, 150)
  drawSprites();
}
  //add styles here

  function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
   x=0
  }else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}

