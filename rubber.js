class Rubber{
    constructor(x,y,width,height){
        var options  = {
            'restitution': 0.3,
            'friction':5,
            'dencity':1
        }
      this.body = Bodies.rectangle(x,y,40,30,options);
      this.width = 40;
      this.height = 30;
      World.add(world,this.body);
    }
  
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
  }
  