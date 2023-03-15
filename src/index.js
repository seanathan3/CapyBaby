import View from "./scripts/view"
import Raft from "./scripts/raft"
import Player from "./scripts/player"
import Game from "./scripts/game"

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 50;

const context = canvas.getContext('2d');


const game = new Game(canvas, context);
new View(canvas, context, game).start();

//creating game loop

const audio = document.createElement('audio')
audio.src="./assets/sans_trim.mp3.mov"

let played = false;

document.addEventListener('keydown', () => {
    if (played === false) {
        audio.play();
        audio.loop = true;
        played = true;
    }})


// let modal = document.getElementById('myModal')
// let btn = document.getElementById('myBtn')
// let span = document.getElementsByClassName('close')[0]

// btn.onclick = function() {
//     modal.style.display = 'block';
// }

// span.onclick = function() {
//     modal.style.display = 'none'
// }