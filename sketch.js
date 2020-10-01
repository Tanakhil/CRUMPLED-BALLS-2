const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	paper = new Paper(100,500,30);
	console.log(paper.body);

	box1 = new Box(1000,640,220,20);
	box2 = new Box(1110,525,20,235);
	box3 = new Box(890,525,20,235);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220,220,220);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  rectMode(CENTER);
  fill(255);
  rect(ground.position.x,ground.position.y,width,10);
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:175,y:-250});
  }
}