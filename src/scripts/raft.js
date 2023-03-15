import Tile from './tile'

class Raft {
    constructor(canvas, context) {
        this.grid = this.makeGrid()
        this.size = this.getSize()
        this.canvas = canvas
        this.c = context
        this.reg_pic = new Image();
        this.reg_pic.src = './assets/minecraft_wood.png';
        this.flashing_pic = new Image();
        this.flashing_pic.src = './assets/flashing3.png'
        this.reg_90 = new Image();
        this.reg_90.src = './assets/minecraft_wood_90.png';
        this.flashing_90 = new Image();
        this.flashing_90.src = './assets/flashing3_90.png'
    }



    makeGrid() {
        let grid = []
        let color = '#5B3113'
        let orientation = '0'
        for (let i = 0; i < 7; i++) {
            grid.push([])
            for (let j = 0; j < 7; j++) {
                grid[i].push(new Tile(i, j, color, orientation))
                color = this.colorSwitch(color)
                orientation = this.orientationSwitch(orientation)
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
        }
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
            let orientation = '0';
            let Xadjustor = (Math.random() - 0.5) * 10;
            let Yadjustor = (Math.random() - 0.5) * 10;


            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 7; j++) {
                    tileArr.push(new Tile(i, j, color, orientation))
                    color = this.colorSwitch(color);
                    if (orientation === '0') {
                        orientation = '90' 
                    } else {
                        orientation = '0'
                    }
                }
            }
    
            let midX = this.canvas.width / 2
            let midY = this.canvas.height / 2
        
            for (let i = 0; i < Math.sqrt(this.size); i++) {
                for (let j = 0; j < Math.sqrt(this.size); j++) {
                    let tile = this.grid[i][j]
                    tile.windowX = midX - 350 + (100 * i);
                    tile.windowY = midY - 350 + (100 * j);
                    if (tile.status !== 'sunk') {
                        this.c.fillStyle = tile.color;

                        if (tile.orientation === '0') {
                            if (tile.status === 'floating') {
                                this.c.drawImage(this.reg_pic, (tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)
                            } else {
                                this.c.drawImage(this.flashing_pic, (tile.x * 100) + midX - 350 + Xadjustor, (tile.y * 100) + midY - 350 + Yadjustor, 100, 100)
                            }
                        } else {
                            if (tile.status === 'floating') {
                                this.c.drawImage(this.reg_90, (tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)
                            } else {
                                this.c.drawImage(this.flashing_90, (tile.x * 100) + midX - 350 + Xadjustor, (tile.y * 100) + midY - 350 + Yadjustor, 100, 100)
                            }
                        }
                    }
                }
            }
    }

    // colorSwitch(color) {
    //     if (color === '#A46233') {
    //         return "#8B4513"
    //     } else {
    //         return '#A46233'
    //     }
    // }

    colorSwitch(color) {
        if (color === '#693816') {
            return "#5B3113"
        } else {
            return '#693816'
        }
    }

    orientationSwitch(orientation) {
        if (orientation === '0') {
            return '90'
        } else {
            return '0'
        }
    }


}

export default Raft;