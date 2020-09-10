
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1,base2,startbase;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var player,Sling;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	player = new Player(100,150);

	box = new Box(1030,200,30,30);
	box1 = new Box(1060,200,30,30);
	box2 = new Box(1090,200,30,30);
	box3 = new Box(1120,200,30,30);
	box4 = new Box(920,170,30,30);
	box5 = new Box(1080,170,30,30);
	box6 = new Box(1010,170,30,30);
	box7 = new Box(1040,170,30,30);
	box7 = new Box(970,200,30,30);
	box8 = new Box(940,200,30,30);
	box9 = new Box(910,170,30,30);
	box10 = new Box(950,170,30,30);
	box11 = new Box(970,170,30,30);
	box12 = new Box(1070,170,30,30);
	box13 = new Box(1040,170,30,30);
	box14 = new Box(990,170,30,30);
	box15 = new Box(1020,170,30,30);
	box16 = new Box(600,150,30,30);
	box17 = new Box(600,150,30,30);
	box18 = new Box(600,150,30,30);
	box19 = new Box(600,150,30,30);
	box20 = new Box(600,150,30,30);
	box21 = new Box(600,150,30,30);
	box22 = new Box(600,150,30,30);
	box23 = new Box(600,150,30,30);
	box24 = new Box(600,150,30,30);
	box25 = new Box(600,150,30,30);
	box26 = new Box(600,150,30,30);
	box27 = new Box(600,150,30,30);
	box28 = new Box(600,150,30,30);
	box29 = new Box(600,150,30,30);
	box30 = new Box(600,150,30,30);


	base1 = new Ground(600,350,300,10);
	base2 = new Ground(1000,300,300,10);
	startbase = new Ground(50,300,400,10);

	Sling = new SlingShot(player.body,{x:200, y:200});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(18, 130, 3);
  Engine.update(engine);

  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  base1.display();
  base2.display();
  startbase.display();

  player.display();
  
  Sling.display();








  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly();
}

function keyPressed(){
if(keyCode===32){
	SlingShot.attach(player.body);


}




}

