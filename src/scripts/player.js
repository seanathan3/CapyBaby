class Player {
    constructor(canvas, context) {
        this.status = 'alive'
        this.size = 50;
        this.startPos = [canvas.width/2 - this.size/2, canvas.height/2 - this.size/2]
        this.pos = this.startPos
        this.c = context
        this.canvas = canvas
        this.capy = new Image();
    }

    chooseSquare(x, y) {
        return [x, y]
    }

    printPos() {
        let [x, y] = this.pos
        this.capy.src = '../assets/capybaby.png'
        this.c.fillStyle = '#000000'
        this.c.drawImage(this.capy,x, y)
    }

    move(dx, dy) {
        let [x, y] = this.pos;
        x += dx
        y += dy
        this.pos = [x, y]
    }

}

export default Player;