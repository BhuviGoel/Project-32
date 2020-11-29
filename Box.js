class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity=225;
    }
    score(){
      if (this.Visiblity<=0 && this.Visiblity>=-45){
        score=score+1
      }
    }

    display(){
   if (this.body.speed<3){
    super.display();
    fill (255)
    stroke ("blue")
    rect (this.body.position.x, this.body.position.y, 30, 40);
  }else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    pop();
  }
}
};
