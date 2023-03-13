import Raft from './raft'
import Player from './player'

class Game {
    constructor(canvas, context) {
        this.raft = new Raft(canvas, context)
        this.player = new Player(canvas, context)
        this.score = 0;
    }

    current_tile() {
        
    }


    
}

export default Game;