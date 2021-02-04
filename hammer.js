class Hammer  {
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.5,
            'friction':1.0,
            'dencity':2
        }
        this.body = Bodies.rectangle(700,200,150,50,options);
        this.width = 150;
        this.height = 50;
        World.add(world,this.body);
      }
      display(){
         var pos =this.body.position;
         rectMode(CENTER);
         fill("green");
         rect(pos.x, pos.y, this.width, this.height);
      }
  }