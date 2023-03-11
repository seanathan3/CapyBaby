import Tile from './tile'

class Raft {
    constructor(canvas, context) {
        this.grid = this.makeGrid()
        this.size = this.getSize()
        this.canvas = canvas
        this.c = context

    }



    makeGrid() {
        let grid = []
        let color = '#A46233'
        for (let i = 0; i < 7; i++) {
            grid.push([])
            for (let j = 0; j < 7; j++) {
                grid[i].push(new Tile(i, j, color))
                color = this.colorSwitch(color)
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
                this.grid[x][y].color = '#FF0000'
                squaresToFlash--
            }
            console.log(squaresToFlash)
        }
        this.draw(this.c)
    }

    flashing(square) {
        let [x, y] = square
        console.log(x)
        console.log(y)
        console.log(this.grid[x][y].color)
        if (this.grid[x][y].color === '#FF0000') {
            console.log('decrement')
            return true
        } else {
            console.log('stay same')
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

    draw(ctx) {
            let tileArr = []
            let color = undefined
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 7; j++) {
                    tileArr.push(new Tile(i, j, color))
                    color = this.colorSwitch(color);
                }
            }
    
            let midX = this.canvas.width / 2
            let midY = this.canvas.height / 2
    
            for (let i = 0; i < tileArr; i++) {
                let tile = tileArr[i]
                this.c.fillStyle = tile.color
                this.c.fillRect((tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)
            }
        
            for (let i = 0; i < Math.sqrt(this.size); i++) {
                for (let j = 0; j < Math.sqrt(this.size); j++) {
                    let tile = this.grid[i][j]
                    this.c.fillStyle = tile.color;
                    this.c.fillRect((tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)

                }
            }
    }

    colorSwitch(color) {
        if (color === '#A46233') {
            return "#8B4513"
        } else {
            return '#A46233'
        }
    }


}

export default Raft;