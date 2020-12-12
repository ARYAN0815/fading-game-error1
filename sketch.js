const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hexagonImg
var engine, world;
var box1;
var polygon;
var ground;
var backgroundImg;
var score=0;
function preload(){
  getBackgroundImage()
hexagonImg=loadImage("sprites/hexagon.png");

}
function setup() {
 var canvas=createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
 
  //level1
  box1=new Box(390,235,30,40);
  box2=new Box(420,235,30,40);
  box3=new Box(450,235,30,40);
  box4=new Box(480,235,30,40);
  box5=new Box(510,235,30,40);
  //level2;
  box6=new Box(420,195,30,40);
  box7=new Box(450,195,30,40);
  box8=new Box(480,195,30,40);
 
  //level3
  box9=new Box(450,155,30,40);
 
   polygon=Bodies.circle(100,300,20);
   World.add(world,polygon);
   slingshot=new SlingShot(this.polygon,{x:200,y:100});
   ground=new Ground(450,260,200,10);
   console.log(box1);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }
  Engine.update(engine);
  noStroke()
    textSize(35);
    fill("black");
    text("score:"+score,400,50);
  imageMode(CENTER);
  image(hexagonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJson=await response.json();
  var datetime=responseJson.datetime;
  console.log(datetime);
  var hour=datetime.slice(11,13)
  console.log(hour);
  if(hour>=06&&hour<=19){
  bg="sprites/bg.png";
  
  }
  else{
  bg="sprites/bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  }