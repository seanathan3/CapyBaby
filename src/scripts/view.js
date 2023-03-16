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
        this.startFrame = 0;
        this.timer = 935;
        this.counter = 3;
        this.speed = 7;
        this.started = false;
        this.velocity = 1.5;
        this.origVel = this.velocity;
        this.dy = 0;
        this.gravity = 0.08;
        this.fps = 90;
        this.randStart = Math.random() * this.canvas.height * 0.8 + (0.1 * this.canvas.height)

        document.addEventListener('keypress', event => {
            if (event.key === 'w') {
                this.game.player.dy = -this.speed;
                if (this.game.player.dx === 0) {
                    this.game.player.direction = 'up'
                }
            } else if (event.key === 'd') {
                this.game.player.dx = this.speed;
                this.game.player.direction = 'right'
                this.game.player.idleDir = 'right'
            } else if (event.key === 's') {
                this.game.player.dy = this.speed;
                if (this.game.player.dx === 0) {
                    this.game.player.direction = 'down'
                }
            } else if (event.key === 'a') {
                this.game.player.dx = -this.speed;
                this.game.player.direction = 'left'
                this.game.player.idleDir = 'left'
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
        this.drawBackground(this.frame)
        
        this.game.raft.draw();
        this.game.player.printPos(this.moveFrame);
        this.scoreboard();
        this.frame += 1
        if (this.moveFrame >= 29) {
            this.moveFrame = 0;
        } else {
            this.moveFrame++
        }

        if (this.game.survive()) {
            setTimeout(() => {
                requestAnimationFrame(this.animate.bind(this));
            }, 1000 / this.fps)
        } else {
            this.gameOver();
            clearInterval(this.interval)
            document.addEventListener('click', this.restartGame.bind(this), {once: true})
        }

    }


    start() {
        setTimeout(() => {
            this.c.drawImage(this.background, 0, 0, 2000, 1000, 0, 0, this.canvas.width, this.canvas.height);

            // this.c.fillStyle = 'rgba(0, 0, 0, 1)'
            // this.c.fillRect(this.canvas.width / 2 - 150, this.canvas.height / 2 - 350, 300, 100)
            this.c.fillStyle = 'rgba(255, 255, 255, 1)'
            this.c.font = '30px sans serif'
            // this.c.fillText('CapyBaby', this.canvas.width / 2 - 65, this.canvas.height / 2 - 290)
            this.swimFrames = 0;
            this.animateStart();
        }, 100)

        document.addEventListener('keydown', () => {
            this.started = true;
            this.c.drawImage(this.background, 0, 0)
            let falling;
            let sitFrames = 0;
            let two;
            let one;
            let stop1 = false;
            let stop2 = false;
            setTimeout(() => {
                this.c.fillStyle = 'rgba(255, 255, 255, 1)'
                this.c.font = '300px sans serif'
                let startPosition = [this.canvas.width / 2 - 60, 0]
                
                falling = setInterval(() => {
                    this.c.drawImage(this.background, 0, 0)
                    this.game.raft.draw();
                    this.c.fillStyle = 'rgba(255, 255, 255, 1)'
                    this.c.fillText('3', this.canvas.width / 2 - 340, this.canvas.height / 2 - 120)

                    if (stop1 === true) {
                        this.c.fillText('2', this.canvas.width / 2 - 65, this.canvas.height / 2 - 120)
                    }

                    if (stop2 === true) {
                        this.c.fillText('1', this.canvas.width / 2 + 210, this.canvas.height / 2 - 120);
                    }
                    

                    if (startPosition[1] <= this.canvas.height / 2 - 50) {
                        this.c.drawImage(this.game.player.capyIdle, 30, 0, 240, 188, startPosition[0], startPosition[1], 117, 91)
                        startPosition[1] += 5
                    } else if (sitFrames <= 49){
                        let modFrames = Math.floor((sitFrames / 10) % 50)
                        this.c.drawImage(this.game.player.capyStand, 1200 - (modFrames * 305), 0, 305, 188, startPosition[0], startPosition[1], 100, 80)
                        sitFrames += 1
                    } else if (sitFrames <= 99) {
                        this.c.drawImage(this.game.player.capyStand, 0, 0, 305, 188, startPosition[0], startPosition[1], 100, 80)
                        sitFrames += 1
                    } else if (sitFrames <= 149) {
                        let modFrames = Math.floor((sitFrames / 10) % 5)
                        this.c.drawImage(this.game.player.capyStand, (modFrames * 305), 0, 305, 188, startPosition[0], startPosition[1], 100, 80)
                        sitFrames++
                    } else {
                        // this.c.drawImage(this.game.player.capyStand, 1200, 0, 305, 188, startPosition[0], startPosition[1], 100, 80)
                        // this.c.drawImage(this.game.player.capyIdle, 1200, 0, 305, 188, startPosition[0], startPosition[1], 100, 80)
                        this.c.drawImage(this.game.player.capyIdle, 30, 0, 240, 188, startPosition[0], startPosition[1], 117, 91);
                        
                    }
                }, 1000 / this.fps)
            }, 200)

            setTimeout(() => {
                this.c.font = '300px sans serif'
                stop1 = true;
            }, 1135)

            setTimeout(() => {
                this.c.font = '300px sans serif'
                stop2 = true;
            }, 2070)
            
            setTimeout(() => {
                this.interval = setInterval(this.cycle.bind(this), this.timer)
                window.clearInterval(falling);
                window.clearInterval(two);
                this.game.player.idleDir = 'left';
                requestAnimationFrame(this.animate.bind(this))
            }, 3005)
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
        this.c.fillRect(0, 0, 230, 40)
        this.c.font = '30px bradley hand'
        this.c.fillStyle = '#FFFFFF'
        this.c.fillText(`SCORE:      ${this.game.score}`, 0, 30)
    }

    drawBackground(frame) {
        let increment = Math.floor(frame / 20)
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
        // document.removeEventListener('click', this.restartGame.bind(this))
        // this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let new_game = new Game(this.canvas, this.c);
        new View(this.canvas, this.c, new_game).start();
    }

    cycle() { 
        if (this.counter % 3 === 0) {
            if (this.counter <= 6) {
                this.game.raft.flashSquares(40);
            } else if (this.counter <= 12) {
                this.game.raft.flashSquares(60);
            } else if (this.counter <= 18) {
                this.game.raft.flashSquares(75);
            } else if (this.counter <= 24) {
                this.game.raft.flashSquares(82);
            } else if (this.counter <= 30) {
                this.game.raft.flashSquares(86);
            } else if (this.counter <= 39) {
                this.game.raft.flashSquares(90);
            } else if (this.counter <= 48) {
                this.game.raft.flashSquares(92);
            } else if (this.counter <= 57) {
                this.game.raft.flashSquares(95);
            } else if (this.counter <= 66) {
                this.game.raft.flashSquares(97);
            } else {
                this.game.raft.flashSquares(98);
            }
            // this.game.raft.flashSquares(50 + this.counter);
        } else if (this.counter % 3 === 1) {
            this.game.raft.dropSquares();
        } else {
            this.game.raft.resetSquares();
            this.game.score += 100;
        }
        this.counter++
    }

    instructions(yAdjustor) {
        this.c.font = '30px bradley hand'
        this.c.fillText('Press any key to start!', this.canvas.width / 2 - 140, this.canvas.height / 2 + 30 - yAdjustor);
    }

    gameOver() {
        this.c.fillStyle = 'rgba(0, 0, 0, 0.7)'
            this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
            this.c.fillStyle = 'rgba(255, 255, 255, 1)'
            this.c.fillText('Game Over', this.canvas.width / 2 - 75, this.canvas.height / 2 - 200)
            this.c.fillText('Final Score', this.canvas.width / 2 - 78, this.canvas.height / 2)
            this.c.fillText(`${this.game.score}`, this.canvas.width / 2 - 25, this.canvas.height / 2 + 50)
            this.c.fillText('click to restart', this.canvas.width / 2 - 100, this.canvas.height / 2 + 200)
    }


    animateStart() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.dy >= 0) {
            this.dy += this.velocity;
            this.velocity -= this.gravity;
        } else {
            this.velocity = this.origVel;
            this.dy = 0;
        }
        
        this.drawBackground(Math.floor(this.startFrame / 2));
        this.instructions(this.dy);
        
        let animationFrames = Math.floor((this.swimFrames / 10) % 5)
        this.c.drawImage(this.game.player.capySwim, 20 + (animationFrames * 270), 0, 270, 140, (this.canvas.width - this.swimFrames * 4), this.randStart, 117, 61);

        if (this.swimFrames < this.canvas.width * 0.3) {
            this.swimFrames++;
            console.log('incrementing')
            console.log(this.swimFrames)
        } else {
            this.swimFrames = 0
            this.randStart = Math.random() * this.canvas.height * 0.8 + (0.1 * this.canvas.height);
        }


        this.startFrame++
        if (this.started === false) {
            setTimeout(() => {
                requestAnimationFrame(this.animateStart.bind(this));
            }, 1000 / this.fps)
        } else {
            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawBackground(Math.floor(this.startFrame / 2));
            this.game.raft.draw();
        }
    }


}



export default View;



/// testtttttttt