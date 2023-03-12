import View from "./scripts/view"
import Raft from "./scripts/raft"
import Player from "./scripts/player"
import Game from "./scripts/game"

//setting up canvas & context
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

//instantiating background and raft

const game = new Game(canvas, context);
new View(canvas, context, game).start();

//creating game loop

document.addEventListener('keydown', event => {
    if (event.key === 'f') {
        game.raft.flashSquares(10)
    } else if (event.key === 'd') {
        game.raft.dropSquares()
    } else if (event.key === 'r') {
        game.raft.resetSquares()
    }
})
