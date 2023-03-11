import View from "./scripts/view"
import Raft from "./scripts/raft"
import Player from "./scripts/player"
import Game from "./scripts/game"

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d')
console.log(context)

const background = new Image();
const raft = new Raft(canvas, context)

function animate() {
    requestAnimationFrame(animate)
    background.src = './assets/aqua.jpg'
    context.drawImage(background, 0, 0)
    // const view = new View(canvas, context)
    raft.draw(context)
    
}

raft.FlashSquares(10)
animate()