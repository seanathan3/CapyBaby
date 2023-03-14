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
        this.speed = 5;

        document.addEventListener('keypress', event => {
            if (event.key === 'w') {
                this.game.player.dy = -this.speed;
                if (this.game.player.dx === 0) {
                    this.game.player.direction = 'up'
                }
            } else if (event.key === 'd') {
                this.game.player.dx = this.speed;
                this.game.player.direction = 'right'
            } else if (event.key === 's') {
                this.game.player.dy = this.speed;
                if (this.game.player.dx === 0) {
                    this.game.player.direction = 'down'
                }
            } else if (event.key === 'a') {
                this.game.player.dx = -this.speed;
                this.game.player.direction = 'left'
            }
        })

        document.addEventListener('keyup', event => {
            if (event.key === 'w') {
                if (this.game.player.dy === -this.speed) {
                    this.game.player.dy = 0;
                    if (this.game.player.dx === 0) {
                        this.game.player.direction = 'idle';
                    }
                }
        
            } else if (event.key === 'd') {
                if (this.game.player.dx === this.speed) {
                    this.game.player.dx = 0;
                    if (this.game.player.dy === 0) {
                        this.game.player.direction = 'idle';
                    } else if (this.game.player.dy > 0) {
                        this.game.player.direction = 'down'
                    } else {
                        this.game.player.direction = 'up'
                    }
                }
        
            } else if (event.key === 's') {
                if (game.player.dy === this.speed) {
                    game.player.dy = 0;
                    if (game.player.dx === 0) {
                        game.player.direction = 'idle';
                    }
                }
        
            } else if (event.key === 'a') {
                if (game.player.dx === -this.speed) {
                    game.player.dx = 0;
                            
                    if (game.player.dy === 0) {
                        game.player.direction = 'idle';
                    } else if (game.player.dy > 0) {
                        game.player.direction = 'down'
                    } else {
                        game.player.direction = 'up'
                    }
        
                }
            }
        })

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
            document.addEventListener('click', this.restartGame.bind(this), {once: true})
        }

    }


    start() {
        setTimeout(() => {
            this.c.drawImage(this.background, 0, 0, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);

            this.c.fillStyle = 'rgba(0, 0, 0, 1)'
            this.c.fillRect(this.canvas.width / 2 - 150, this.canvas.height / 2 - 350, 300, 100)
            this.c.fillStyle = 'rgba(255, 255, 255, 1)'
            this.c.font = '30px sans serif'
            this.c.fillText('CapyBaby', this.canvas.width / 2 - 65, this.canvas.height / 2 - 290)

            this.c.fillText('click to start', this.canvas.width / 2 - 70, this.canvas.height / 2)
        }, 100)

        const start = document.createElement('button')

        document.addEventListener('click', () => {
            this.interval = setInterval(this.cycle.bind(this), this.timer)
            requestAnimationFrame(this.animate.bind(this))
        }, {once: true})
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
        let increment = Math.floor(this.frame / 20)
        if (increment % 4 === 3) {
            this.c.drawImage(this.background, 0, 0, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);
        } else if (increment % 4 === 2) {
            this.c.drawImage(this.background, 50, 10, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);
        } else if (increment % 4 === 1) {
            this.c.drawImage(this.background, 100, 0, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);
        } else {
            this.c.drawImage(this.background, 150, 10, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);
        }
    }

    restartGame() {
        document.removeEventListener('click', this.restartGame.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let new_game = new Game(this.canvas, this.c);
        new View(this.canvas, this.c, new_game).start();
    }

    cycle() { 
        if (this.counter % 3 === 0) {
            this.game.raft.flashSquares(50 + this.counter);
        } else if (this.counter % 3 === 1) {
            this.game.raft.dropSquares();
        } else {
            this.game.raft.resetSquares();
            this.game.score += 100;
        }
        this.counter++
    }
}



export default View;