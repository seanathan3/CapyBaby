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

const speed = 5;
//creating game loop

document.addEventListener('keypress', event => {
    if (event.key === 'w') {
        game.player.dy = -speed;
    } else if (event.key === 'd') {
        game.player.dx = speed;
        game.player.direction = 'right'
    } else if (event.key === 's') {
        game.player.dy = speed;
    } else if (event.key === 'a') {
        game.player.dx = -speed;
        game.player.direction = 'left'
    }
})

document.addEventListener('keyup', event => {
    if (event.key === 'w') {
        if (game.player.dy === -speed) {
            game.player.dy = 0;
        }

    } else if (event.key === 'd') {
        if (game.player.dx === speed) {
            game.player.dx = 0;
        }
    } else if (event.key === 's') {
        if (game.player.dy === speed) {
            game.player.dy = 0;
        }
    } else if (event.key === 'a') {
        if (game.player.dx === -speed) {
            game.player.dx = 0;
        }
    }
})