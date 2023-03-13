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

document.addEventListener('keypress', event => {
    if (event.key === 'w') {
        game.player.dy = -5;
    } else if (event.key === 'd') {
        game.player.dx = 5;
    } else if (event.key === 's') {
        game.player.dy = 5;
    } else if (event.key === 'a') {
        game.player.dx = -5;
    }
})

document.addEventListener('keyup', event => {
    if (event.key === 'w') {
        game.player.dy = 0;
    } else if (event.key === 'd') {
        game.player.dx = 0;
    } else if (event.key === 's') {
        game.player.dy = 0;
    } else if (event.key === 'a') {
        game.player.dx = 0;
    }
})