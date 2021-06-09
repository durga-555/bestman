class createDrop {
  constructor(x, y) {

      var options ={
          restitution:0.1,
          friction:0.001
      }
      this.r = 5;
      this.body = Bodies.circle(x, y,5,options); 
      //this.drops = loadImage("download.png") 
      World.add(world, this.body);

  }
  update(){
    if(this.body.position.y > height){
     Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
}
  display(){
      //imageMode(CENTER);
      fill("darkblue");
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
} 
};