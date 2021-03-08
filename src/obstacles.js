class Obstacles {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;
    }

    move() {
        this.x -= this.velocity;
    }

    checkCollison() {
        if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x + 30) {
            alert("youre hit")
        }
    }


}

class Dog extends Obstacles{
    constructor(dimensions){
        super(dimensions);
        this.height = 100;
        this.width = 110;
        this.velocity = Math.floor(Math.random() * 2) + 1;
    }

    drawDog(ctx){
        const dog = new Image();
        dog.src = 'css/images/dog_left.png'
        ctx.clearRect(dog, this.x, this.y - 150, this.width, this.height)
        ctx.drawImage(dog, this.x, this.y - 150, this.width, this.height)

        // ctx.fillStyle = "white";
        // ctx.fillRect(this.x, this.y, 30,30)
    }

    animate(ctx){
        this.move();
        this.drawDog(ctx);
    }
}

class Flyer extends Obstacles{
    constructor(dimensions){
        super(dimensions);
        this.width = 120;
        this.height = 110;
        this.velocity = Math.floor(Math.random() * 3) + 1

    }

    drawFlyer(ctx){
        const flyer = new Image();
        flyer.src = 'css/images/flyer.png';
        ctx.clearRect(flyer, this.x, this.y - 550, this.width, this.height)
        ctx.drawImage(flyer, this.x, this.y - 550, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawFlyer(ctx);
    }
}

class People extends Obstacles{
    constructor(dimensions) {
        super(dimensions);
        this.height = 150;
        this.width = 220;
        this.velocity = (Math.random() * 3)+1;
    }

    drawDog(ctx) {
        const dog = new Image();
        dog.src = 'css/images/dancers.png'
        ctx.clearRect(dog, this.x, this.y - 210, this.width, this.height)
        ctx.drawImage(dog, this.x, this.y - 210, this.width, this.height)
    }

    animate(ctx) {
        this.move();
        this.drawDog(ctx);
    }

}

class Skater extends Obstacles {
    constructor(dimensions) {
        super(dimensions);
        this.height = 100;
        this.width = 130;
        this.velocity = 4;
    }

    drawSkater(ctx) {
        const skater = new Image();
        skater.src = 'css/images/skater.png'
        ctx.clearRect(skater, this.x, this.y - 160, this.width, this.height)
        ctx.drawImage(skater, this.x, this.y-160, this.width, this.height)
    }

    animate(ctx) {
        this.move();
        this.drawSkater(ctx);
    }

}

class Toaster extends Obstacles {
    constructor(dimensions) {
        super(dimensions);
        this.height = 100;
        this.width = 130;
        this.counter = 0
    }

    drawSkater(ctx) {
        const toaster = new Image();
        toaster.src = 'css/images/toaster.png'
        ctx.clearRect(toaster, this.x, this.y - 480, this.width, this.height)
        ctx.drawImage(toaster, this.x, this.y - 480, this.width, this.height)
    }

    move(){
        var increase = Math.PI * 2 / 100;

        this.x -= 1;
        this.y += Math.sin(this.counter/2);
        this.counter += increase;
    }

    animate(ctx) {
        this.move();
        this.drawSkater(ctx);
    }
 
}

export {Dog, Flyer, People, Skater, Toaster}

