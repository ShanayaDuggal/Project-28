class Launcher {
    constructor(bA,bB){ 
        var options={
            bodyA:bA,
            pointB:bB,
            length:20,
            stiffness:0.004
        }
       this.launcher=Constraint.create(options)
       World.add(world,this.launcher)
    }
    fly(){
this.launcher.bodyA=null
    }
    attach(body){
        this.launcher.bodyA=body

    }
    display(){
        if(this.launcher.bodyA){
        var pointA=this.launcher.bodyA.position
        var pointB=this.launcher.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}