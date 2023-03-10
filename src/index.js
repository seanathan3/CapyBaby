import View from "./scripts/view"
import Raft from "./scripts/logic/raft"
import Player from "./scripts/logic/player"
import Game from "./scripts/logic/game"

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d')
console.log(context)

const background = new Image();

function animate() {
    requestAnimationFrame(animate)
    background.src = './assets/aqua.jpg'
    context.drawImage(background, 0, 0)
    const view = new View(canvas, context)
}

animate()