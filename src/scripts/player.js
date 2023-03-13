class Player {
    constructor(canvas, context) {
        this.status = 'alive'
        this.width = 90;
        this.height = 60;
        this.startPos = [canvas.width/2 - this.width/2, canvas.height/2 - this.height/2]
        this.pos = this.startPos
        this.c = context
        this.canvas = canvas
        this.capy = new Image();
        this.capy.src = '../assets/the_real_walk.png'
    }

    chooseSquare(x, y) {
        return [x, y]
    }

    printPos(frame) {
        console.log(frame)
        let sprite = Math.floor(frame / 8)

        let [x, y] = this.pos
        this.c.fillStyle = '#000000'
        this.c.drawImage(this.capy, 75 + (sprite * 240), 0, 240, 188, x, y, 90, 70)
    }

    move(dx, dy) {
        let [x, y] = this.pos;
        x += dx
        y += dy
        this.pos = [x, y]
    }

    chooseSprite(frame) {
        this.c.drawImage(this.capy, 0, 0, 250, 170, x, y, 90, 60)
    }

}

export default Player;