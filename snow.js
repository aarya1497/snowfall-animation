class snow {
    constructor(x, y, f, d)  {
        var options = {
            friction: f,
            density:  d,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 0.1, 0.1, options);
        this.width = 0.1;
        this.height = 0.1;
        this.image = loadImage("snow5.webp");

        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        imageMode(CENTER);
        rectMode(CENTER);
        stroke("black");
        fill("skyblue");
        image(this.image, posX, posY);
        this.image.resize(100,100);
      }
}