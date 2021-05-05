class Log {
    constructor(x,y,height,angle){

        box_options = {
            restitution : 0.75,
            friction :1.0,
            density : 1.0
        };

        this.body = Bodies.rectangle(x,y,20,height,box_options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;

        push ();
        translate (this.body.position.x,this.body.position.y);
        angleMode (RADIANS);
        rotate (angle);
        fill ("brown"); 
        rectMode (CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
