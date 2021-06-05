const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, cheese, x;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
    cheese = new BaseClass(50,50,30,30,50)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot1 = new SlingShot(cheese.body,{x:180, y:220});
    slingshot2 = new SlingShot(cheese.body,{x:210, y:220});
    slingshot3 = new SlingShot(bird.body,{x:180, y:220});
    slingshot4 = new SlingShot(bird.body,{x:210, y:220});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    cheese.body.x = bird.body.x
    cheese.body.y = bird.body.y
    cheese.display()
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingshot2.display();
    slingshot4.display();
    bird.display();
    slingshot1.display()
    slingshot3.display();
    //platform.display();
    //log6.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    bird.cheese()
    cheese.cheese()
}


function mouseReleased(){
    slingshot1.fly();
    slingshot2.fly();
    slingshot3.fall();
    slingshot4.fall();
}