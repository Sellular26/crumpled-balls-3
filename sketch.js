const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var paperBall, TrashCan_bottom, trash_img;
var ground,  trashCan_side1, trashCan_side2, trash;

function preload(){
  trash_img = loadImage('trash.png');
}

function setup(){
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  paperBall = new Paperball(200, 350, 50, 50);

  trashCan_side1 = new Trash(590, 290, 1, 140);
  trashCan_side2 = new Trash(710, 290, 1, 140);
  TrashCan_bottom = new Trash(650, 360, 100, 20);

  trash = createSprite(650, 290, 30, 30);
	trash.addImage("trash", trash_img);
  trash.scale = 0.5;
  trash.height = 100;

  ground = new Trash(400, 380, 800, 20);

  rope = new Slingshot(paperBall.body, {x: 200, y: 100});
}

function draw(){
  background("grey");

  Engine.update(engine);

  paperBall.display();
  TrashCan_bottom.display();
  trashCan_side1.display();
  trashCan_side2.display();

  drawSprites();

  rope.display();

  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paperBall.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}