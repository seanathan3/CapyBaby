class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    draw(c) {
        c.beginPath()
        c.arc(x, y, radius, 0, 2 * Math.PI, false)
        c.stroke()
    }
}