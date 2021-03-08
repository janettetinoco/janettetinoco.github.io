export default class Hearts {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height ;
        this.width = 60;
        this.height = 50;
        this.velocity = 2
    }

    drawHeart(ctx) {
        const dog = new Image();
        dog.src = 'css/images/heart.png'
        // ctx.drawImage(dog, this.x, this.y, 60, 50)
        // ctx.drawImage(dog, this.x+60, this.y, 55, 45)

        this.drawFrame(ctx, dog, this.x, this.y - 100, this.width, this.height)
        // this.drawFrame(ctx,dog, this.x+60, this.y, 55, 45)

        // ctx.fillStyle = "white";
        // ctx.fillRect(this.x, this.y, 30,30)
    }

    drawFrame(ctx, img, frameX, frameY, canvasX, canvasY){
        ctx.drawImage(img, frameX, frameY, canvasX, canvasY)
    }

    animate(ctx) {
        this.move();
        this.drawHeart(ctx);
    }

    move() {
        this.x -= this.velocity;
    }
}