class Trash{
    constructor(x, y, radius, angle){
        var options={
            isStatic: false,
            restitution : 0.8,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png");
        this.image1 = loadImage("trash2.gif");
        this.image2=loadImage("trash3.png");
        this.trashImg = loadImage("paper.png");
        this.trash2Img = loadImage("trash2.png");
        this.trashImg3 = loadImage("trash3.png");
        this.trash4Img = loadImage("trash4.png");
        this.image.scale=0.2;
        this.body.position.x = x;
        this.body.position.y =y;
        radius = this.body.radius;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);

    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        var radius = this.body.radius;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         //imageMode(CENTER);
         //image(this.image,0,0, 90,90);
         pop();
    }
    trash1(){
        push();
        var pos= this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 90, 90);
        pop();
    }
    trash2(){
        push();
        var pos= this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.trash2Img, 0, 0, 90, 90);
        pop();
    }
    trash3(){
        push();
        var pos= this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.trashImg3, 0, 0, 90, 90);
        pop();
    }
    trash4(){
        push();
        var pos= this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.trash4Img, 0, 0, 90, 90);
        pop();
    }
}