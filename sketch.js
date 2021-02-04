
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var rubber;
var stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,695,800,10);
  hammer = new Hammer(700,200,300,50);
	rubber = new Rubber(500,200,40,30);
	stone = new Stone(300,200,20,200,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  Engine.update(engine);
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
  drawSprites();
 
}