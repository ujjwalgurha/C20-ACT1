const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld =  myEngine.world;


  
  var option = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(0,380,400,10,option);
  World.add(myWorld,ground);
  


var option2 ={
restitution : 1.5

}

  ball  = Bodies.circle(100,10,10,option2);
  World.add(myWorld,ball);

  
}


function draw() 
{
  background(51);
  Engine.update(myEngine);

  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,30)




  
 
}

