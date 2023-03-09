class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    draw(c) {
        c.beginPath()
        c.arc(x, y, radius, 0, 2 * Math.PI, false)
        c.stroke()
    }
}

// const Circle = require('circle.js');

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.background = 'red';

const c = canvas.getContext('2d')


//grid rendering
c.fillStyle = "rgba(255, 0, 0, 0.5)"
let x = 0;
let y = 0;
let col = 'odd';
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        c.fillRect(x, y, 100, 100);
        y += 200;
    }
    if (col === 'odd') {
        y = 100
        col = 'even'
    } else {
        y = 0;
        col = 'odd'
    }
    x += 100;
}

// circle rendering
// for (let i = 0; i < 10; i++) {
//     let red = (Math.random() * 255);
//     let green = (Math.random() * 255);
//     let blue = (Math.random() * 255);


//     c.strokeStyle = `rgba(${red}, ${green}, ${blue})`;
//     let x = (Math.random() * canvas.width);
//     let y = (Math.random() * canvas.height);
//     c.beginPath();
//     c.arc(x, y, 50, 0, 2 * Math.PI, false);
//     c.stroke();
// }

// diagonal grid lines rendering
for (let i = 0; i < 20; i++) {
    let x = 0;
    let y = 200;
    y += (i * 200)
    c.beginPath();
    c.moveTo(x, y)
    c.lineTo(y, x)
    c.stroke();
}

// diagonal grid lines rendering (pt 2)
x = -1100;
y = 0
for (let i = 0; i < 20; i++) {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + 10000, y + 10000);
    c.stroke();
    x += 200
}


let radius = 50;

x = (Math.random() * canvas.width);
while (x + radius > canvas.width || x - radius < 0) {
    x = (Math.random() * canvas.width);
}

y = (Math.random() * canvas.height);
while (y + radius > canvas.height || y - radius < 0) {
    y = (Math.random() * canvas.height);
}

let speed = 15;
let dx = Math.random() * (speed * 2) - 15;

let yDir
Math.random() < .5 ? yDir = -1 : yDir = 1

let dy = Math.sqrt((speed ** 2) - (dx ** 2)) * yDir;

// animating 1 circle

myCircle = new Circle(x, y, radius)

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)

    //setting values for x, dx, y, dy & radius
    let radius = 20;

    x = (Math.random() * canvas.width);
    while (x + radius > canvas.width || x - radius < 0) {
        x = (Math.random() * canvas.width);
    }

    y = (Math.random() * canvas.height);
    while (y + radius > canvas.height || y - radius < 0) {
        y = (Math.random() * canvas.height);
    }

    let speed = 0;
    let dx = Math.random() * (speed * 2) - (speed / 2);

    let yDir
    Math.random() < .5 ? yDir = -1 : yDir = 1

    let dy = Math.sqrt((speed ** 2) - (dx ** 2)) * yDir;

    myCircle.draw(c)
    // c.beginPath();
    // c.arc(x, y, radius, 0, 2 * Math.PI, false);
    // c.stroke();
    
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx
    }

    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy
    }

    x += dx;
    y += dy;
    
}

animate()

