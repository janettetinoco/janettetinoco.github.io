

const CONSTANTS = {
    PLAYER_W: 90,
    PLAYER_H: 145,
    GRAVITY: 0.2
}
export default class Player {
    constructor(dimensions) {
        this.velocity = 0.4;
        this.dimensions = dimensions;
        this.x = this.dimensions.width/40;
        this.y = this.dimensions.height * .45;
        this.i =0;
        this.height = 0;
    }
    drawPlayer(ctx, frame){
        const player = new Image();
        const anim = ['css/images/small.png',
        'css/images/medium_walk.png',
            'css/images/larger.png', 'css/images/medium_walk.png']

        if(frame % 10 === 0) this.i = (this.i+1) % 4
        player.src = anim[this.i];
        ctx.drawImage(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)
        //
        // if (score < 200) player.src = 'css/images/small.png';
        // if (score >= 200 && score < 400) player.src = 'css/images/medium.png';
        // if (score >= 400) player.src = 'css/images/larger.png';
        //

        // if (this.direction === 'right') player.src = 'css/images/small.png';
        // if (this.direction === 'left') player.src = 'css/images/small.png';
        // console.log(this.x)
        // console.log(this.y)
        // ctx.clearRect(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H);
        // ctx.drawImage(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H);
        // player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))
        // this.loadPlayer(ctx);
        // debugger
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)
    }
    
    animate(ctx, frame){
        // console.log("hello")
        this.move();
        this.drawPlayer(ctx, frame);
    }

    // loadPlayer(ctx){
    //     const player = new Image();
    //     player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))
    //     player.src = 'src/images/player.png';
    // }

    move(){
        this.x += this.velocity;
        this.y -= this.height;
        if (this.y - this.height < 335 ){
            this.height -= CONSTANTS.GRAVITY;
        }else{
            this.height = 0;
        }
    }

    speedUp(){
        this.velocity += 0.6;
    }
    jump(){
        this.height = 5;
    }

    faceLeft(){
        this.velocity = -0.1
    }

    bounds(){
        return{
            left: this.x+10,
            right: this.x + CONSTANTS.PLAYER_W-10,
            top: this.y,
            bottom: this.y + CONSTANTS.PLAYER_H
        }
    }

}