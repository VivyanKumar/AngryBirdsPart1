class Bird {
    constructor(x,y){

        box_options = {
            restitution : 0.75,
            friction :1.0,
            density : 1.0
        };

        this.body = Bodies.rectangle(x,y,50,50,box_options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;

        push ();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate (this.body.position.x,this.body.position.y);
        angleMode (RADIANS);
        rotate (angle);
        fill ("red"); 
        rectMode (CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
