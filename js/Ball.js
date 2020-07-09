class Ball {
  constructor(x, y, radius) {
    var options = {
      frictionAir: 0,
      friction: 0,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 1.0,
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.enemy = loadImage("assets/enemy.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    // fill("lightpink");
    image(this.enemy, pos.x, pos.y, 50, 50);
    pop();
  }
}
