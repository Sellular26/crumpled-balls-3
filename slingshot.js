class Slingshot{
    constructor(body1, pointB){
        var options={
            bodyA: body1,
            pointB: pointB,
            length: 10,
            stiffness: 0.04,
        }
        this.slingshot = Matter.Constraint.create(options);
        World.add(world, this.slingshot);
    }
fly(){
    this.slingshot.bodyA = null;
}
    display(){
        if (this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}