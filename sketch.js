const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;

var ball;
function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  };
  var ops = {restitution:2}
  
  body = Bodies.rectangle(200,390,400,10,options);
  World.add(world,body);

  ball = Bodies.circle(200,10,10,ops);
  World.add(world,ball);

  console.log(body);
  console.log(body.type);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(body.position.x,body.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
}