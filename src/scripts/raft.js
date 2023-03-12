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

    flashSquares(percent) {
        let squaresToFlash = Math.floor(this.size * (percent / 100))
        let dimension = Math.sqrt(this.size)

        while (squaresToFlash > 0) {
            //choosing a random square to flash
            let x = Math.floor((Math.random() * dimension))
            let y = Math.floor((Math.random() * dimension))
            
            //checking if random square is already flashing (will try again if not)
            let tile = this.grid[x][y];
            if (!tile.flashing()) {
                tile.flash();
                squaresToFlash--
            }
            // console.log(squaresToFlash)
        }
        console.log(this)
        this.draw()
    }

    dropSquares() {
        for (let i = 0; i < Math.sqrt(this.size); i++) {
            for (let j = 0; j < Math.sqrt(this.size); j++) {
                let tile = this.grid[i][j]
                if (tile.status === 'flashing') {
                    tile.sink();
                }
            }
        }
    }

    resetSquares() {
        for (let i = 0; i < Math.sqrt(this.size); i++) {
            for (let j = 0; j < Math.sqrt(this.size); j++) {
                let tile = this.grid[i][j]
                tile.reset();
            }
        }   
    }

    draw() {
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
        
            for (let i = 0; i < Math.sqrt(this.size); i++) {
                for (let j = 0; j < Math.sqrt(this.size); j++) {
                    let tile = this.grid[i][j]
                    if (tile.status !== 'sunk') {
                        this.c.fillStyle = tile.color;
                        this.c.fillRect((tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)
                    }
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