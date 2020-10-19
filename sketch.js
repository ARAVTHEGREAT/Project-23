var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redrop1,redrop2,redrop3;
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
	
	redrop1=createSprite(400, 650,200,20);
	redrop1.shapeColor ="red";

	redrop2=createSprite(490, 600,20,100);
	redrop2.shapeColor ="red";

	redrop3=createSprite(310, 600,20,100);
	redrop3.shapeColor ="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	redrop1= Bodies.rectangle(400, 640,200,20, {isStatic:true} );
	 World.add(world, redrop1);
	 
	 redrop2= Bodies.rectangle(490, 600,20,100, {isStatic:true} );
	 World.add(world, redrop2);

	 redrop3= Bodies.rectangle(310, 600,20,100, {isStatic:true} );
	 World.add(world, redrop3);

	 Matter.Body.setStatic(redrop1, true);
	 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	packageSprite.X = packageBody.position.X
	packageSprite.Y = packageBody.position.Y

	Matter.Body.setStatic(packageBody, false);
	
	

  }
}


