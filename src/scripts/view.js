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
    }

    animate() {
        // set up animation to render new frames
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(this.animate.bind(this));
    
        // load background image
        this.background.src = './assets/aqua.jpg'
        this.c.drawImage(this.background, 0, 0);
        
        this.game.raft.draw(this.c);
    }
}

export default View;