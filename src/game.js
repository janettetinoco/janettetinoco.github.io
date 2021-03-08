import Level from './level';
import Player from './player'
import {Dog, Flyer, People, Skater, Toaster} from './obstacles';
import Heart from './hearts';
import * as Window from './user_windows';


export default class KeithGame{

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.threats = [];
        this.obstacle = [];
        this.frame = 0;
        this.eventsHandler();
        this.restart();
        this.x_coord = 800;
        
        this.score = 0
    }

    animate(){
        if(this.score < 0){
            alert("GAME OVER")
            this.running = false;
        }
        this.level.animate(this.ctx);
        this.player.animate(this.ctx, this.frame);
        this.frame ++
        //tets
        this.animateObstacles()
        // this.heart.animate(this.ctx);
        //
        let that = this.obstacle
        if (this.running) {//this needs to happen as you refresh the page
            if (this.frame % 450 === 0 && this.obstacle.length < 3 || this.frame === 4) that.push(new Dog(this.dimensions));
            if (this.frame % 700 === 0 && this.player.y < 200 || this.frame === 10) that.push(new Flyer(this.dimensions));
            if (this.obstacle.length < 2 && this.frame % 600 === 0 && !this.obstacle.some((ele) => ele instanceof People)) that.push(new People(this.dimensions));
            if (this.obstacle.length === 1 && this.frame % 50 === 0 && !this.obstacle.some((ele) => ele instanceof Skater)) that.push(new Skater(this.dimensions));
            if (!this.obstacle.some((ele) => ele instanceof Heart) && this.obstacle.length > 1) that.push(new Heart(this.dimensions));
            if (!this.obstacle.some((ele) => ele instanceof Toaster)) that.push(new Toaster(this.dimensions));

            if(this.player.x >300){
                let subway = new Image();
                subway.src = 'css/images/subway.png';
                this.ctx.drawImage(subway, this.x_coord, 3000, 275, 275)
                this.x_coord -= 0.2
            }

            this.checkCollison();
            requestAnimationFrame(this.animate.bind(this));

        }
    }

    animateObstacles(){ 
        for (let i = 0; i < this.obstacle.length; i++) {
            this.obstacle[i].animate(this.ctx);
            if(this.obstacle[i].x+ this.obstacle[i].width < 0){
                this.obstacle.splice(i,1);
            }
        }
    }

    restart(){
        this.running = true;//when game is over change to false
        this.player = new Player(this.dimensions);
        this.level = new Level(this.dimensions, this.ctx);
        this.frame = 0;

        this.animate();
    }

    play(){
        this.running =  true;
        this.animate();
    }

    spaceDown(){
        this.player.speedUp();
    }

    arrowUpJump(){
        this.player.jump();
    }

    arrowGoBack(){
        if(this.running){
            this.player.faceLeft();
        }
    }

    checkCollison(){
        let bounds = this.player.bounds();
        for (let i = 0; i < this.obstacle.length; i++){
            let obs = this.obstacle[i];
            if(obs instanceof Dog && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y-150) this.score -= 5 ;
            if (obs instanceof Flyer && obs.x+10 < bounds.right && bounds.left < obs.x && obs.y + obs.height - 5 < bounds.top) this.score -= 5
            if (obs instanceof People && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 150) this.score -= 5
            if (obs instanceof Skater && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 160) this.score -= 5
            if (obs instanceof Toaster && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 160) this.score -= 5

            if (obs instanceof Heart && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y - 100){
                this.score === 0 ? this.score = 100 : this.score +=100
                this.obstacle.splice(i, 1);
            }

        }
        let scoreShown
        this.score < 0 ? scoreShown = 0 : scoreShown= this.score;
        Window.scoreCont.innerHTML = scoreShown;

    }

    eventsHandler(){
        this.spaceBarHandler = this.spaceDown.bind(this);
        this.arrowUpHandler = this.arrowUpJump.bind(this);
        this.arrowLeftHandler = this.arrowGoBack.bind(this);
        window.addEventListener("keydown", (e) => {
            if (e.code === 'Space'){
                this.spaceBarHandler();
            }
            if(e.code === 'ArrowUp'){
                this.arrowUpHandler();
            }
            if(e.code === 'ArrowLeft'){
                this.arrowLeftHandler();
            }
        })
        window.addEventListener("keyup", (e) => {
            this.player.velocity = .4;
        })

    }
}