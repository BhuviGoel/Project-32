const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var score = 0;

function preload() {
// getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(530,335,30,40);
    box2 = new Box(560,335,30,40);
    box3 = new Box(590,335,30,40);
    box4 = new Box(620,335,30,40);
    box5 = new Box(650,335,30,40);
    
    box6 = new Box(560,295,30,40);
    box7 = new Box(590,295,30,40);
    box8 = new Box(620,295,30,40);
    
    box9 = new Box(590,255,30,40);
    float1 = new Ground(590, 360,200,10);
    
    box10 = new Box(930,235,30,40);
    box11= new Box(960,235,30,40);
    box12= new Box(990,235,30,40);
    box13= new Box(1020,235,30,40);
    box14= new Box(1050,235,30,40);
    box15= new Box(960,195,30,40);
    box16= new Box(990,195,30,40);
    box17= new Box(1020,195,30,40);
    box18= new Box(990,155,30,40);
    float2 = new Ground(990, 260,200,10);
  
    polygon = new Polygon(100,100);

    //constraintLog= new Log(230, 180, 80, PI/2);
    sling= new Sling(polygon.body, {x:150, y:150});

}

function draw(){
    background(0);
    noStroke();
    textSize(20)
    fill(255)
    text("Score =  " + score, 1070, 80)
    text("Drag the Hexagonal Stone towards your LEFT and Release it, to launch it towards the blocks", 230, 30)
    text("Press 'SPACE' to get another chance!",800 ,360)
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    float1.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    float2.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
 

    polygon.display();


    //  constraintLog.display();
     sling.display();
    //  getBackground();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
 sling.fly();
}

function keyPressed(){
    if (keyCode===32){
        sling.attach(polygon.body)
    }
}

// async function getBackground(){
//     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//     var responseJSON = await response.json();

//     var datetime = responseJSON.datetime;
//     var hour = datetime.slice(11,13);
    
//     if(hour>=06 && hour<=19){
//         bg=color(225)
//     }
//     else{
//         bg=color(255)
//     }
//     background(bg);
// }