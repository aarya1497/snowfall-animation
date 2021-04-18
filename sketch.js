const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
  bgImg = loadImage("snow3.jpg");
  snowSound = loadSound("Snowsound.mp3")
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
	world = engine.world;

  snowflake = new snow(200, 20, 0.1, 1);
  snowflake1 = new snow(300, 20, 0.1, 1);
  snowflake2 = new snow(400, 20, 0.1, 1);
  snowflake3 = new snow(500, 20, 0.1, 1);
  snowflake4 = new snow(600, 20, 0.1, 1);
  snowflake5 = new snow(700, 20, 0.1, 1);
  snowflake6 = new snow(62, 20, 0.1, 1);
  snowflake7 = new snow(557, 20, 0.1, 1);
  snowflake8 = new snow(470, 20, 0.1, 1);
  snowflake9 = new snow(329, 20, 0.3, 5);

  Engine.run(engine);
}

function draw() {
  background(bgImg); 

 snowSound.play();

  snowflake.display();
  snowflake1.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
  snowflake5.display();
  snowflake6.display();
  snowflake7.display();
  snowflake8.display();
  snowflake9.display();
}