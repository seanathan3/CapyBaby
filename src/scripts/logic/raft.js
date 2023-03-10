class Raft {
    constructor() {
        this.grid = this.makeGrid()
        this.size = this.getSize()

    }

    makeGrid() {
        let grid = []
        for (let i = 0; i < 9; i++) {
            grid.push([])
            for (let j = 0; j < 9; j++) {
                grid[i].push('O')
            }
        }
        return grid
    }

    getSize() {
        let size = 0
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                size++
            }
        }
        return size
    }

    FlashSquares(percent) {
        let squaresToFlash = Math.floor(this.size * (percent / 100))
        let dimension = Math.sqrt(this.size)

        while (squaresToFlash > 0) {
            let x = Math.floor((Math.random() * dimension))
            let y = Math.floor((Math.random() * dimension))
            if (!this.flashing([x, y])) {
                this.grid[x][y] = 'W'
                squaresToFlash--
            }
        }
    }

    flashing(square) {
        let [x, y] = square
        if (this.grid[x][y] === 'W') {
            return true
        } else {
            return false
        }
    }

    dropSquares() {
        for (let i = 0; i < Math.sqrt(this.size); i++) {
            for (let j = 0; j < Math.sqrt(this.size); j++) {
                if (this.grid[i][j] === 'W') {
                    this.grid[i][j] = 'X'
                }
            }
        }
    }

    resetSquares() {
        for (let i = 0; i < Math.sqrt(this.size); i++) {
            for (let j = 0; j < Math.sqrt(this.size); j++) {
                this.grid[i][j] = 'O'
            }
        }   
    }


}

export default Raft;