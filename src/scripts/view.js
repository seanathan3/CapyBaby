import Tile from './tile'

class View {
    constructor(canvas, context) {
        this.canvas = canvas
        // this.canvas.width = window.innerWidth;
        // this.canvas.height = window.innerHeight;
        this.c = context
        this.startX = (this.canvas.width / 2) - 250;
        this.startY = (this.canvas.height / 2) - 250;
        this.draw()



    }

    draw() {
        let tileArr = []
        let color = '#A46233'
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                tileArr.push(new Tile(i, j, color))
                color = this.colorSwitch(color);
                console.log(color)
            }
        }
        console.log(tileArr)

        let midX = this.canvas.width / 2
        let midY = this.canvas.height / 2

        for (let i = 0; i < tileArr.length; i++) {
            let tile = tileArr[i]
            this.c.fillStyle = tile.color
            this.c.fillRect((tile.x * 100) + midX - 350, (tile.y * 100) + midY - 350, 100, 100)

        }


        // let rowAdjustor = 50;
        // this.c.fillStyle = "rgba(139, 69, 19)"
        // for (let x = 0; x < 10; x++) {
            
        //     for (let y = 0; y < 5; y++) {
        //         // this.c.rect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
        //         // this.c.fill();
        //         // this.c.stroke();
        //         this.c.fillRect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
        //     }
        //     if (rowAdjustor === 50) {
        //         rowAdjustor = 0;
        //     } else {
        //         rowAdjustor = 50;
        //     }
        // }

        // rowAdjustor = 0;
        // for (let x = 0; x < 10; x++) {
        //     this.c.fillStyle = "#A46233"
            
        //     for (let y = 0; y < 5; y++) {
        //         this.c.fillRect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
        //         // this.c.rect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
        //         // this.c.fill();
        //         // this.c.stroke();
        //     }
        //     if (rowAdjustor === 50) {
        //         rowAdjustor = 0;
        //     } else {
        //         rowAdjustor = 50;
        //     }
        // }
    }

    colorSwitch(color) {
        if (color === '#A46233') {
            return "rgba(139, 69, 19)"
        } else {
            return '#A46233'
        }
    }

}

export default View;