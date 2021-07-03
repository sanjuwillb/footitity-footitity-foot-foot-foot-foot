const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, backgroundImg2;
var bird, slingShot, cheese, x, f, j = 0, bb8 = 0, score = 0, score1 = 0;

function preload() {
    backgroundImg2 = loadImage("sprites/bg2.jpg")
    backgroundImg = loadImage("sprites/bg.png");
    hi = loadImage("sprites/sling1.png")
    hello = loadImage("sprites/sling2.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    wall1 = new Ground(-14,height/2,20,400)
    wall2 = new Ground(1214,height/2,20,400)
    wall3 = new Ground(width/2,-14,1200,20)
    //platform = new Ground(150, 305, 300, 170);
    cheese = new BaseClass(50,50,30,30,50)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 390);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,200,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot1 = new SlingShot(cheese.body,{x:180, y:220});
    slingshot2 = new SlingShot(cheese.body,{x:210, y:220});
    slingshot3 = new SlingShot(bird.body,{x:180, y:220});
    slingshot4 = new SlingShot(bird.body,{x:210, y:220});
    whatIsTheTime()
}

function draw(){
    if (bb8 === 1){
      background(backgroundImg2)
    };
    if (bb8 === 0){
      background(backgroundImg)
    }
    Engine.update(engine);
    strokeWeight(4);
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
    wall1.display()
    wall2.display()
    wall3.display()

    image(hi, 200, 190)
    slingshot2.display();
    slingshot4.display();
    bird.display();
    slingshot1.display()
    slingshot3.display();
    image(hello, 172, 182)
    //platform.display();
    //log6.display();
    if (score1 > score){
        score = score + 100
    } 
    stroke("black")
    fill("white")  
    strokeWeight(2)
    textSize(25)
    text(score, 1000, 30) 
}

function mouseDragged(){
    if (j == 0){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
      bird.cheese()
      cheese.cheese()
    }
}


function mouseReleased(){
    slingshot1.fly();
    slingshot2.fly();
    slingshot3.fall();
    slingshot4.fall();
    bird.on()
    j = 1
    slingshot1.return()
    slingshot2.return()
}

function keyPressed(){
    if (keyCode === 32){
        bird = new Bird(100,100);
        slingshot1 = new SlingShot(cheese.body,{x:180, y:220});
        slingshot2 = new SlingShot(cheese.body,{x:210, y:220});
        slingshot3 = new SlingShot(bird.body,{x:180, y:220});
        slingshot4 = new SlingShot(bird.body,{x:210, y:220});
        bird.off()
        j = 0
        slingshot1.add()
        slingshot2.add()
    }
}
async function whatIsTheTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Detroit")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
    if (hour < 7|| hour > 18){
        bb8 = 1
    }
    if (hour > 6 || hour < 19){
        bb8 = 0
    }
}