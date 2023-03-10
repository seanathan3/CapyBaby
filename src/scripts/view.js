class View {
    constructor(canvas, context) {
        this.canvas = canvas
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = context
        this.startX = (this.canvas.width / 2) - 250;
        this.startY = (this.canvas.height / 2) - 250;

        this.draw()



    }

    draw() {
        let rowAdjustor = 50;
        this.c.fillStyle = "rgba(139, 69, 19)"
        for (let x = 0; x < 10; x++) {
            
            for (let y = 0; y < 5; y++) {
                this.c.fillRect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
            }
            if (rowAdjustor === 50) {
                rowAdjustor = 0;
            } else {
                rowAdjustor = 50;
            }
        }

        rowAdjustor = 0;
        for (let x = 0; x < 10; x++) {
            this.c.fillStyle = "rgb(244, 164, 96)"
            
            for (let y = 0; y < 5; y++) {
                this.c.fillRect(x * 50 + this.startX, y * 100 + rowAdjustor + this.startY, 50, 50)
            }
            if (rowAdjustor === 50) {
                rowAdjustor = 0;
            } else {
                rowAdjustor = 50;
            }
        }
    }

}

export default View;