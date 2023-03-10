const { _ } = require("core-js");

import Circle from '../src/scripts/circle'

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

let circleArr = [];

function init() {

    circleArr = []

    for (let i = 0; i < 1800; i++) {
        let radius = (Math.random() * 3) + 1;
    
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
    
        circleArr.push(new Circle(x, y, dx, dy, radius));
    }
}


console.log(circleArr)

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 40;
let minRadius = 2;

console.log(mouse)

window.addEventListener('mousemove', (event) => {
    console.log(mouse.x, mouse.y)
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update(mouse, maxRadius, minRadius);
    }


}

console.log(c)

init();
animate();



