class Player {



    constructor(canvas, context) {
        this.status = 'alive'
        this.width = 90;
        this.height = 60;
        this.startPos = [canvas.width/2 - this.width/2, canvas.height/2 - this.height/2]
        this.pos = this.startPos
        this.c = context;
        this.canvas = canvas;
        this.dx = 0;
        this.dy = 0;
        this.movement = 'idle';
        this.capyLeft = new Image();
        this.capyLeft.src = '../assets/the_real_walk.png';
        this.capyRight = new Image();
        this.capyRight.scr = '..assets/'
    }

    chooseSquare(x, y) {
        return [x, y]
    }

    printPos(frame) {
        this.move(this.dx, this.dy)
        this.chooseSprite();
        let sprite = Math.floor(frame / 8)

        let [x, y] = this.pos
        this.c.fillStyle = '#000000'
        this.c.drawImage(this.capyLeft, 75 + (sprite * 240), 0, 240, 188, x, y, 90, 70)
    }

    move(dx, dy) {
        let [x, y] = this.pos;
        x += dx
        y += dy
        this.pos = [x, y]
    }

    chooseSprite() {
        if (this.dx > 0) {
            this.movement = 'right'
        } else if (this.dx < 0) {
            this.movement = 'left'
        }
    }

}

// Player.SPRITES = {
//     left: this.capyLeft,
//     right: this.capyRight
// }



export default Player;