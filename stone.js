class Stone  {
  constructor(x, y, width, height){
      var options = {
          'restitution': 0.2,
          'friction':2.0,
          'dencity':1
      }
      this.body = Bodies.rectangle(300,200,50,150,options);
      this.width = 50;
      this.height = 150;
      World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("black");
       rect(pos.x, pos.y, this.width, this.height);
    }
}