import Tile from './tile'
import Capybara from './capybara'

class View {
    constructor(canvas, context) {
        this.canvas = canvas
        // this.canvas.width = window.innerWidth;
        // this.canvas.height = window.innerHeight;
        this.c = context
        this.startX = (this.canvas.width / 2) - 250;
        this.startY = (this.canvas.height / 2) - 250;
        this.draw()



    }

}

export default View;