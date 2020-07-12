class Trash {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.body.visible = false;
      this.body.visible = false;
      this.body.visible = false;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      push();
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }