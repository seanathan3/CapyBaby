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
        this.background.src = './assets/aqua.jpg';
        this.frame = 0;
        this.moveFrame = 0;
        this.time = 0;
        setInterval(() => {
            this.time += 1;
            console.log(game.player.pos)
        }, 1000)

    }

    animate() {
        // set up animation to render new frames
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(this.animate.bind(this));
    
        // load background image
        this.c.drawImage(this.background, 0, 0);
        
        this.game.raft.draw();
        this.game.player.printPos(this.moveFrame);
        this.scoreboard();
        this.frame += 1
        if (this.moveFrame >= 39) {
            this.moveFrame = 0;
        } else {
            this.moveFrame++
        }
    }

    start() {
        this.loop()
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
}



export default View;