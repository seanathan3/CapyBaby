const { _ } = require("core-js");

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

function draw_circle(x, y, radius) {
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI, false);
    c.stroke();
}

let radius = 50;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.fill();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}


let circleArr = [];

for (let i = 0; i < 100; i++) {
    let radius = 30;

    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);

    circleArr.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArr)

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }


}

animate()