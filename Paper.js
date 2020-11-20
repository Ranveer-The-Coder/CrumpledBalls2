class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:1,
          density:1.20
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);

      this.image = loadImage("paper.png")
    }
    display(){ 
     var pos =this.body.position;
    var angle = this.body.angle;
    push();
    //translate();
    rotate(angle);
    fill(255);
    imageMode (CENTER)
    image(this.image,pos.x, pos.y,this.radius,this.radius)    
    pop();
    }
}

  