class Player {

    static sprites = {
        
    }

    constructor(canvas, context) {
        this.status = 'alive'
        this.width = 90;
        this.height = 60;
        this.startPos = [canvas.width/2 - this.width/2, canvas.height/2 - this.height/2]
        this.pos = this.startPos
        this.gridPos = [357, 357]
        this.c = context;
        this.canvas = canvas;
        this.dx = 0;
        this.dy = 0;
        this.direction = 'idle';
        this.idleDir = 'left';

        this.capyLeft = new Image();
        this.capyLeft.src = './assets/the_real_left.png';
        this.capyRight = new Image();
        this.capyRight.src = './assets/the_real_right.png';
        this.capyIdle = new Image();
        this.capyIdle.src = './assets/the_real_idle.png';
        this.capyDown = new Image();
        this.capyDown.src = './assets/the_real_front.png';
        this.capyUp = new Image();
        this.capyUp.src = './assets/the_real_back.png';
        this.capyIdleR = new Image();
        this.capyIdleR.src = './assets/the_real_idle_right.png';
        this.capyStand = new Image();
        this.capyStand.src = './assets/the_real_stand.png';
        this.capySwim = new Image();
        this.capySwim.src = './assets/the_real_swim.png'

    }

    chooseSquare(x, y) {
        return [x, y]
    }

    printPos(frame) {
        this.move(this.dx, this.dy)
        let animation = Math.floor(frame / 6)
        let sprite = this.chooseSprite()

        let [x, y] = this.pos
        this.c.fillStyle = '#000000'

        if (this.direction === 'left') {
            this.c.drawImage(sprite, 75 + (animation * 240), 0, 240, 188, x - 17, y - 25, 90, 70);
        } else if (this.direction === 'right') {
            this.c.drawImage(sprite, 50 + (animation * 240), 0, 240, 188, x + 20, y - 25, 90, 70);
        } else if (this.direction === 'up') {
            this.c.drawImage(sprite, 10 + (animation * 215), 0, 215, 215, x, y - 25, 80, 80);
        } else if (this.direction === 'down') {
            this.c.drawImage(sprite, 10 + (animation * 215), 0, 215, 215, x, y - 25, 80, 80);
        } else if (this.direction === 'idle') {

            if (this.idleDir === 'left') {
                this.c.drawImage(sprite, 30 + (animation * 220), 0, 240, 188, x - 17, y - 25, 117, 91);
            } else {
                this.c.drawImage(sprite, 20 + (animation * 220), 0, 240, 188, x - 10, y - 25, 117, 91);
            }
        }
    }

    move(dx, dy) {
        let [x, y] = this.pos;
        if (this.gridPos[0] + dx > 0 && this.gridPos[0] + dx < 700) {
            x += dx
            this.gridPos[0] += dx;
        }

        if (this.gridPos[1] + dy > 0 && this.gridPos[1] + dy < 700) {
            y += dy
            this.gridPos[1] += dy;
        }
        this.pos = [x, y]
    }

    chooseSprite() {
        if (this.direction === 'left') {
            return this.capyLeft;
        } else if (this.direction === 'right') {
            return this.capyRight;
        } else if (this.direction === 'up') {
            return this.capyUp;
        } else if (this.direction === 'down') {
            return this.capyDown;
        } else if (this.direction === 'idle') {
            if (this.idleDir === 'left') {
                return this.capyIdle;
            } else {
                return this.capyIdleR;
            }
        }
    }

}




export default Player;