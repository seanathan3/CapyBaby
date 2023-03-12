class Player {
    constructor(canvas, context) {
        this.status = 'alive'
        this.size = 50;
        this.startPos = [canvas.width/2 - this.size/2, canvas.height/2 - this.size/2]
        this.pos = this.startPos
        this.c = context
        this.canvas = canvas
    }

    chooseSquare(x, y) {
        return [x, y]
    }

    printPos() {
        let [x, y] = this.pos
        console.log(this.pos)
        this.c.fillStyle = '#000000'
        this.c.fillRect(x, y, this.size, this.size)
    }

    move(dx, dy) {
        let [x, y] = this.pos;
        x += dx
        y += dy
        this.pos = [x, y]
    }

}

export default Player;