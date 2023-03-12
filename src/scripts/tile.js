class Tile {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.originalColor = color;
        this.status = 'floating'
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
}

Tile.FLASHING = '#FF0000'
Tile.SUNK = '#FFFFFF'

export default Tile;