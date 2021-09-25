//Ctreated Class
class SlingShot{
    constructor(bodyA,pointB){
        //Create Options
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        //COnstraint String
        this.sling=Constraint.create (options);
        //Add bodies to the world
        World.add(world, this.sling);
    }
    //Craete function fly
    fly(){
        this.sling.bodyA=null;
    }
    //Display the output
    display(){
        //Make condition that bird will be released
        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

    }
    
}