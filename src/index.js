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

let playing = false;

document.addEventListener('keydown', () => {
    if (playing === false) {
        audio.play();
        audio.loop = true;
        playing = true;
    }}, {once: true})

let playButton = document.querySelector('#sound')

playButton.addEventListener('click', () => {
    if (playing === true) {
        audio.pause();
        playing = false;
        playButton.setAttribute('src', './assets/sound_off.png')
    } else {
        audio.play();
        playing = true;
        playButton.setAttribute('src', './assets/sound_on.png')
    }
})

let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]


modal.addEventListener('click', (event) => {
    modal.style.display = 'none';
})

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none'
}