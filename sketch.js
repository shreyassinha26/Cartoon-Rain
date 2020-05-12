const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

const World = Matter.World;


var engine , world;
var array;


function setup() {
  createCanvas(800 , 400);
  engine = Engine.create();
  world = engine.world;
  array = [];
  for(var i = 0;i<200;i++){
    var rain = new Rain();
    array[i] = rain;
    
  }
  
}

function draw() {
  background("skyblue");  
  drawSprites();
  Engine.update(engine);
  for(var i= 0;i<200;i++){
    array[i].display();
    
    
  }
}