const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,80);
	
	dustbin1 = new Dustbin(650,650,200,20);
	dustbin2 = new Dustbin(750,610,20,100);
	dustbin3 = new Dustbin(550,610,20,100);

	paper = new Paper(100,80,20);
    
	




	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();


  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});

  }
}

