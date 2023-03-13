let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

class Circle {

    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = Circle.COLORS[Math.floor(Math.random() * Circle.COLORS.length)]
    }


    draw() {
        c.fill();
        c.beginPath();
        c.fillStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        // c.stroke();
    }

    update(mouse, maxRadius, minRadius, colors) {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw(colors);

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1
        }
        
    }
}

Circle.COLORS =  [
    '#FF4858',
    '#1B7F79',
    '#00CCC0',
    '#72F2EB'
]

export default Circle;