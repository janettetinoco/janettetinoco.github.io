

export default class Level {
    constructor(dimensions, context) {
        this.dimensions = dimensions;
        this.canvasWidth= this.dimensions.width;
        // this.x=0;
        // this.drawBase(context);
        // this.drawDots(context);
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#ffd24d";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBase(ctx);
        this.drawDots(ctx)
    }
    drawBase(context){
        context.lineWidth = 3;
        context.fillStyle = "black"
        context.fillRect(0,475, this.canvasWidth, 7)
    }

    drawDots(context){
        context.fillStyle = "black"

        for (let i = 1; i < this.canvasWidth; i = i + 40) {
            context.fillRect(i + 25, 475, 10, 9)
            context.fillRect(i, 490, 10, 9)
            context.fillRect(i + 28, 505, 10, 9)
            context.fillRect(i + 13, 518, 10, 8)
            context.fillRect(i + 28, 530, 10, 9)
            context.fillRect(i, 545, 10, 9)
        }
        // for(let i = 1; i < 900 ; i= i+40){
        //     context.fillRect(this.x + i + 25 , 475, 10, 9)
        //     context.fillRect(this.x + i, 490, 10, 9)
        //     context.fillRect(this.x + i + 28, 505, 10, 9)
        //     context.fillRect(this.x + i + 13, 518, 10, 8)
        //     context.fillRect(this.x + i + 28, 530, 10, 9)
        //     context.fillRect(this.x + i, 545, 10, 9)
        // }

        // for (let i = 1; i < 900; i = i + 40) {
        //     context.fillRect(this.canvasWidth + this.x + i + 25, 475, 10, 9)
        //     context.fillRect(this.canvasWidth + this.x + i, 490, 10, 9)
        //     context.fillRect(this.canvasWidth + this.x + i + 28, 505, 10, 9)
        //     context.fillRect(this.canvasWidth + this.x + i + 13, 518, 10, 8)
        //     context.fillRect(this.canvasWidth + this.x + i + 28, 530, 10, 9)
        //     context.fillRect(this.canvasWidth + this.x + i, 545, 10, 9)
        // }
    }


    animate(ctx) {
       this.drawBackground(ctx)
        
        // if (this.x === -1 * this.canvasWidth) this.x = 0;
        // this.x -= 0.2
    }

    


}