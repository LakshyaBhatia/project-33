const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var turn = 0;

var divisionHeight=300;
var score = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;
var score8 = 0;
var score9 = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
 text(""+score,25,530);
 text(""+score1,95,530);
 text(""+score2,185,530);
 text(""+score3,255,530);
 text(""+score4,335,530);
 text(""+score5,405,530);
 text(""+score6,485,530);
 text(""+score7,575,530);
 text(""+score8,25,530);
 text(""+score9,25,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}