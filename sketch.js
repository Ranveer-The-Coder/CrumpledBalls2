
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pic;

function preload()
{
	pic= loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height,1400,20)
	ground.debug = true;

	Engine.run(engine);

// 	edge1 = createSprite(875,610,10,100); // left edge
	//edge1.shapeColor =  ("red")

	//edge2 = createSprite(1075,610,10,100); // right edge
	//edge2.shapeColor =  ("red")

	//edge3 = createSprite(970,655,200,10); // bottom edge
	//edge3.shapeColor =  ("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	edgeL = new Dustbin (890,610,10,100)
	edgeR = new Dustbin (990,610,10,100)
	edgeB = new Dustbin (890,655,40,10)
 
	paper = new Paper (200,405,65,65)
	

	
   
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display ();
  paper.display ();
  edgeL.display();
  edgeR.display();
  edgeB.display();
  drawSprites();
  image(pic,865,520,150,150)
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:780,y:-780})
	}
}

