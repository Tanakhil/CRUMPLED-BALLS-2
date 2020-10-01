class Box {
  constructor(x, y, width, height) {
    var options = {
        'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Image = loadImage("Sprites/dustbingreen.png")
    
    
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill(255, 255, 255);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    image(this.Image,865,320);
  }
};