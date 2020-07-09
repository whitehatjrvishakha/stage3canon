const {
  Engine,
  World,
  Bodies,
  Body,
  Mouse,
  MouseConstraint,
  Constraint,
  Composite,
  Detector,
} = Matter;

var ground;
var launchX, launchY;
var launcherX, launcherY;
var flag = "start";
var bg123;

function preload() {
  bg123 = loadImage("assets/bg123.jpg");
}
//img

function setup() {
  // Setup the canvas
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200, 490, 1200, 20);
  tanker = new Tanker(70,376,100,150);
  tankerhead = new TankerHead(140,452,100,100);
  ball1 = new Ball(300, 100, 25);
  ball2 = new Ball(400, 200, 25);
  ball3 = new Ball(500, 150, 25);
  ball4 = new Ball(600, 100, 25);

  canonball = new CanonBall(20, 20);
  shot = new ShootBall(canonball.body, { x: 70, y: height - 220 });
}

function draw() {
  background(bg123);
  Engine.update(engine);

  ground.display();
  tankerhead.display();
  tanker.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  canonball.display();
  shot.display();
  if (keyIsDown(32)) {
    shot.attach(canonball.body);
  }
}

function keyReleased() {
  // Call the shoot
  if (keyCode === 32) {
    flag = "launch";

    shot.shoot();
  }
}
