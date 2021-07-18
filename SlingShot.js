class SlingShot{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.point = point;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if (this.sling.bodyA){
            var point1= this.sling.bodyA.position;
            var point2 = this.point;
            push();
            stroke("black");
            strokeWeight(4);
            line(point1.x,point1.y,point2.x, point2.y);
            pop();
        }
        
    }
    fly(){
        this.sling.bodyA=null;
    }
}
 