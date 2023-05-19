class Tile {
    constructor(x, y, color, orientation) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.originalColor = color;
        this.status = 'floating'
        this.orientation = orientation
    }

    flash() {
        this.color = Tile.FLASHING
        this.status = 'flashing'
    }

    flashing() {
        return this.color === Tile.FLASHING
    }

    sink() {
        this.color = Tile.SUNK;
        this.status = 'sunk'
    }

    reset() {
        this.color = this.originalColor;
        this.status = 'floating';
    }
}

Tile.FLASHING = 'rgba(140, 80, 20, 0.8)'
Tile.SUNK = '#000000'

export default Tile;