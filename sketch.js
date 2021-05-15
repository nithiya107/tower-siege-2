const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11;
var box12, box13, box14, box15;
var box16, box17, box18;
var box19, box20;
var box21;
var box22, box23, box24, box25;
var box26, box27, box28;
var box29, box30;
var box31;
var slingShot, polygon1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(350, 350, 170, 10);
  ground2 = new Ground(600, 150, 100, 10);
  box1 = new Box(300, 330,20, 30 );
  box2 = new Box(320, 330, 20,30);
  box3 = new Box(340, 330, 20, 30);
  box4 = new Box(360, 330, 20, 30);
  box5 = new Box(380, 330, 20, 30);
  box6 = new Box(400, 330, 20, 30);
  box7 = new Box2(310, 300, 20, 30);
  box8 = new Box2(330, 300, 20, 30);
  box9 = new Box2(350, 300, 20, 30);
  box10 = new Box2(370, 300, 20, 30);
  box11 = new Box2(390, 300, 20, 30);
  box12 = new Box3(320, 270, 20, 30);
  box13 = new Box3(340, 270, 20, 30);
  box14 = new Box3(360, 270, 20, 30);
  box15 = new Box3(380, 270, 20, 30);
  box16 = new Box4(330, 240, 20, 30);
  box17= new Box4(350, 240, 20, 30);
  box18= new Box4(370, 240, 20, 30);
  box19 = new Box5(340, 210, 20, 30);
  box20 = new Box5(360, 210, 20, 30);
  box21 = new Box6(350, 180, 20, 30);
  box22 = new Box(570, 130, 20, 30);
  box23 = new Box(590, 130, 20, 30);
  box24 = new Box(610,130, 20, 30);
  box25 = new Box(630, 130, 20, 30);
  box26 = new Box2(580, 100, 20, 30);
  box27 = new Box2(600, 100, 20, 30);
  box28 = new Box2(620, 100, 20, 30);
  box29 = new Box3(590, 70, 20, 30);
  box30 = new Box3(610, 70, 20, 30);
  box31 = new Box4(600, 40, 20, 30);
  polygon1 = new Polygon(50, 200, 35);
  slingShot = new SlingShot(polygon1.body, {x:100, y:200});

  Engine.run(engine);
}

function draw() {
  background("#0018b5"); 
  Engine.update(engine); 
  text("Press space to relaunch the slingshot", 400, 25);
  ground1.display();
  ground2.display();
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
  box31.display();
  polygon1.display();
  slingShot.display();
  
  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon1.body, {x:50, y:200});
    slingShot.attach(polygon1.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
