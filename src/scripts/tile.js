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

    reset() {
        this.color = this.originalColor;
        this.status = 'floating';
    }
}

Tile.FLASHING = 'rgba(140, 80, 20, 0.8)'
// Tile.FLASHING = `rgba(140, 80, 20, ${Math.random() * 0.2 + 0.7})`
Tile.SUNK = '#000000'

export default Tile;