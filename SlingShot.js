class SlingShot{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.point = point;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        image (this.sling1,210,70,30,150);
        image (this.sling2,190,55,30,100);
        if (this.sling.bodyA){
            var point1= this.sling.bodyA.position;
            var point2 = this.point;
            push();
            if(point1.x<220){
                stroke(48,22,8);
                strokeWeight(4);
                line(point1.x-25,point1.y,point2.x-10, point2.y+20);
                line(point1.x-25,point1.y,point2.x+20,point2.y+30);
                image(this.sling3,point1.x-25,point1.y-10,15,30);
            }
            else{
                stroke(48,22,8);
            strokeWeight(4);
            line(point1.x-25,point1.y,point2.x-10, point2.y+20);
            line(point1.x-25,point1.y,point2.x+20,point2.y+30);
            image(this.sling3,point1.x+25,point1.y-10,15,30);
            }
            pop();
        }
        
    }
    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
}
 