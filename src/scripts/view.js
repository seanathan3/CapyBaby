import Tile from './tile'
import Game from './game'

class View {
    constructor(canvas, context, game) {
        this.canvas = canvas
        // this.canvas.width = window.innerWidth;
        // this.canvas.height = window.innerHeight;
        this.c = context
        this.startX = (this.canvas.width / 2) - 250;
        this.startY = (this.canvas.height / 2) - 250;
        this.game = game
        this.background = new Image();
        this.background.src = './assets/pokemon_sea.png';
        this.frame = 0;
        this.moveFrame = 0;
        this.timer = 1000;
        this.counter = 0;
        this.interval = setInterval(() => {
            if (this.counter % 3 === 0) {
                this.game.raft.flashSquares(50 + this.counter);
            } else if (this.counter % 3 === 1) {
                this.game.raft.dropSquares();
            } else {
                this.game.raft.resetSquares();
                this.game.score += 100;
            }
            this.counter++
        }, this.timer)

    }

    animate() {
        // set up animation to render new frames
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // load background image
        // this.c.drawImage(this.background, 0, 0,);
        this.drawBackground()
        
        this.game.raft.draw();
        this.game.player.printPos(this.moveFrame);
        this.scoreboard();
        this.frame += 1
        if (this.moveFrame >= 39) {
            this.moveFrame = 0;
        } else {
            this.moveFrame++
        }

        if (this.game.survive()) {
            requestAnimationFrame(this.animate.bind(this));
        } else {
            this.c.fillStyle = 'rgba(0, 0, 0, 0.7)'
            // this.c.fillRect(this.canvas.width / 2 - 150, this.canvas.height / 2 - 50, 300, 100)
            this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
            this.c.fillStyle = 'rgba(255, 255, 255, 1)'
            this.c.fillText('Game Over', this.canvas.width / 2 - 75, this.canvas.height / 2)

            clearInterval(this.interval)
        }

    }


    start() {
        requestAnimationFrame(this.animate.bind(this))
    }

    loop() {
        let counter = 0;
        setInterval(() => {
            if (counter % 3 === 0) {
                this.game.raft.flashSquares(80);
            } else if (counter % 3 === 1) {
                this.game.raft.dropSquares();
            } else {
                this.game.raft.resetSquares();
                this.game.score += 100;
            }
            counter++
        }, 1200)
    }

    scoreboard() {
        this.c.fillStyle = 'rgba(100, 100, 100, .6)'
        this.c.fillRect(0, 0, 300, 100)
        this.c.font = '30px sans serif'
        this.c.fillStyle = '#FFFFFF'
        this.c.fillText(`SCORE:      ${this.game.score}`, 30, 60)
    }

    drawBackground() {
        let increment = Math.floor(this.frame / 50)
        if (increment % 2 === 0) {
            this.c.drawImage(this.background, 0, 0, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height)
        } else {
            this.c.drawImage(this.background, 50, 50, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
}



export default View;