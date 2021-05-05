
// Modules - Engine, World, Bodies

// Nicknames - namespacing

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground;

var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

var ground_options,box_options;

function setup(){
    createCanvas(1200,400);

    engine = Engine.create(); // engine = Matter.Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);
    box5 = new Box(810,150,70,70);

    pig1 = new Pig(810,320);
    pig2 = new Pig(810,250);


    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,150,300,PI/2);
    log3 = new Log(780,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);


    bird = new Bird(150,50);

   ground = new Ground(600,height,1200,10);

    

    console.log(ground);
    console.log(box);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
    
    
}