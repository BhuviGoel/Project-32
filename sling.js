class Sling{ 
constructor(bodyA, pointB){ 
    var options = { 
        bodyA: bodyA, 
        pointB: pointB, 
        stiffness: 0.04, 
        length: 10 
    } 
    
    this.sling = Constraint.create(options); 
    this.pointB=pointB
    World.add(world, this.sling);

 
}

fly(){
    this.sling.bodyA=null;
   }
   
attach(bodyA){
    this.sling.bodyA=bodyA
  }
  

    display(){ 
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position; 
        var pointB = this.sling.pointB; 
        strokeWeight(4); 
        stroke (255,192,203)
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    } 
}
