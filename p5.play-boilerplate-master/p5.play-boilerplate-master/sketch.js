var backgroundImage;
var player;
var spikes,running,bg,death,jump;
var bgImg,obstcale1,deathsound,run,jumpsound

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

bg = createSprite(400,200,50,50);
spikes = createSprite(100,20);
running = createSprite(200,80);
death = createSprite(50,40);
jump = createSprite(20,70);
bg.addImage(bgImg);
running.addAnimation("run",run);
death.addAnimation("dead",deathsound);
jump.addAnimation("jump",jumpsound);
spikes.addImage("spike",spikes);

}

function preload() {
bgImg = loadImage("assets/bg.jpg");
obstcale1 = loadImage("asstes/spikes.jpg");
run = addAnimation("asstes/running animation.png")
deathsound = addAnimation("assets/death.mp3");
jumpsound = addAnimation("assets/jump.mp3");
}
function draw() {
  background(255,255,255);  
  bg.addImage(bgImg);
  drawSprites();
  
  

}