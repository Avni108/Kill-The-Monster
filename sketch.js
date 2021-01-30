const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bg,BgImg;
var ground;
var Superhero;
var rope;
var monster;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload() {
BgImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1000, 600);
  
	engine = Engine.create();
  world = engine.world; 

  ground = new Ground(365,500,850,20);
  Superhero = new SuperHero(150,250,200);
  monster = new Monster(750,200,230);
  rope = new Rope(Superhero.body,{x:210,y:50});
  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(600, 100, 50, 50);
  box3 = new Box(600, 100, 50, 50);
  box4 = new Box(600, 100, 50, 50);
  box5 = new Box(600, 100, 50, 50);
  box6 = new Box(600, 100, 50, 50);
  box7 = new Box(500, 100, 50, 50);
  box8 = new Box(500, 100, 50, 50);
  box9 = new Box(500, 100, 50, 50);
  box10 = new Box(500, 100, 50, 50);
  box11 = new Box(500, 100, 50, 50);
  box12 = new Box(500, 100, 50, 50);
  box13 = new Box(400, 100, 50, 50);
  box14 = new Box(400, 100, 50, 50);
  box15 = new Box(400, 100, 50, 50);
  box16 = new Box(400, 100, 50, 50);
  box17 = new Box(400, 100, 50, 50);
  box18 = new Box(400, 100, 50, 50);
  box19 = new Box(400, 100, 50, 50);
  box20 = new Box(400, 100, 50, 50);
  
  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(BgImg);

  fill("white");
  ground.display();
  fill("blue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("pink");
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  fill("yellow");
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  Superhero.display();  
  monster.display();  
  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(Superhero.body,{x: mouseX , y: mouseY});
}