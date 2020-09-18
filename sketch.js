var Zenia,wall1;
var Torus,wall3;
var cyclap,wall5;
var speed;
function setup() {
  createCanvas(800,600);
  //centre line code
  wall2 = createSprite(400,150,800,10);
  wall4 = createSprite(400,300,800,10);
  wall6=createSprite(400,450,800,10);
  wall6.shapeColor="white";
  wall4.shapeColor="white";
  wall2.shapeColor="white";
  //car creating code.
  Zenia=createSprite(50,70,50,50);
  Torus=createSprite(735,230,50,50);
  Cyclap=createSprite(735,370,50,50);
  BM=createSprite(735,530,50,50);

  //giving color to cars.
  Zenia.shapeColor="white";
  Torus.shapeColor="yellow";
  Cyclap.shapeColor="red";
  BM.shapeColor="green";
  //wall creating code.
  wall1=createSprite(770,70,20,80);
  wall3=createSprite(770,230,20,80);
  wall5=createSprite(770,370,20,80);
  wall7=createSprite(770,530,20,80);
wall1.shapeColor="gray";
wall3.shapeColor="gray";
wall5.shapeColor="gray";
wall7.shapeColor="gray";
}

function draw() {
  background(0);  
  drawSprites();
  Zenia.velocityX=3;
  if(wall1.x- Zenia.x<(Zenia.width+wall1.width)/2)
  {
  Zenia.velocityX=0;
  var deformation=0.5*speed*speed/22509;
  if(deformation>180)
  {
    Zenia.shapeColor=color(225,0,0);
  }
  if(deformation>180&&deformation>180)
  {
    Zenia.shapeColor=color(230,230,0);
  }
  if(deformation>100)
  {
    Zenia.shapeColor=color(0,255,0);
  }
  }
  console.log(Zenia.x-wall1.x)
  //if(Zenia.x-wall1.x < Zenia.width/2+wall1.width/2
    //&&wall1.x-Zenia.x<wall1.width/2+Zenia.width/2){
 //Zenia.shapeColor="red";
 //wall1.shapeColor="red";
 // }
//else{
 // Zenia.shapeColor="white";
//wall1.shapeColor="gray";
 //}
Zenia.debug=true;
}