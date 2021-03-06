var x, z = 1
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.hi = loadImage("sprites/sling1.png")
        this.hello = loadImage("sprites/sling2.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = cheese.body;
        z = -1
    }
    fall(){
        this.sling.bodyA = null;
    }
    add(){
        z = z + 1
    }
    return(){
        strokeWeight(9.6)
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            if (mouseX<120){
                if (z == 1){
                  x = 4*(mouseX/50)
                }
            }
            strokeWeight(x);
            stroke(255,67,55)
            if (this.sling.bodyA === cheese.body){
              line(pointA.x, pointA.y+10, pointB.x, pointB.y);
            }
        pop()
        }
    }
    
}