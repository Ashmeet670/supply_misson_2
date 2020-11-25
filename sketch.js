var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	


	engine = Engine.create();
	world = engine.world;

	var properties = {
		restitution: 0.2,
		isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , properties);
	World.add(world, packageBody);
	



	box1 = new Box(480,600,20,100,"red")
	box2 = new Box(280,600,20,100,"red")
	box3 = new Box(380,650,220,20,"red")


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
  if (keyDown(DOWN_ARROW)) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
  }
  
  box1.display();
  box2.display();
  box3.display();

  Engine.update(engine) 
}