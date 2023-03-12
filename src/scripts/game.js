import Raft from './raft'
import Player from './player'

class Game {
    constructor(canvas, context) {
        this.raft = new Raft(canvas, context)
        this.player = new Player(canvas, context)
        this.score = 0;
    }

    play() {
        while (this.player.status === 'alive') {
            this.raft.flashSquares(20)
            let userChoice = this.player.chooseSquare(1, 1)
            this.raft.dropSquares()
            if (this.raft.grid[userChoice[0]][userChoice[1]] === 'X') {
                console.log('you lose')
                this.player.status = 'dead'
            } else {
                console.log('you survived!')
            }
        }
        console.log('exited loop')
    }


    
}

export default Game;