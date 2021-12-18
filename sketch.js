const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var borracha
var prreda
var freeeo
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    borracha = new Rubber(200,300,70)
    prreda = new preda(600,300)
    freeeo = new fero(1000,300)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    borracha.display();
    prreda.display();
    freeeo.display();
}