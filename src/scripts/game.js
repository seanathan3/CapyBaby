import Raft from './raft'
import Player from './player'

class Game {
    constructor(canvas, context) {
        this.raft = new Raft(canvas, context)
        this.player = new Player(canvas, context)
        this.score = 0;
    }

    survive() {
        let x = Math.floor(this.player.gridPos[0] / 100)
        let y = Math.floor(this.player.gridPos[1] / 100)
        console.log(this.raft.grid[x][y])
        if (this.raft.grid[x][y].status !== 'sunk') return true;
        return false;
    }


    
}

export default Game;