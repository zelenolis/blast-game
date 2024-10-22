import { filedX, filedY, colours } from '../constants.js'

export const field = [];

class Tile {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
}

function fieldInit() {
    for (let i = 0; i < filedX; i++) {
        for (let j = 0; j < filedY; j++) {
            field.push(new Tile(i, j, randomColor()))
        }
    }
}

function randomColor() {
    return 1 + Math.floor(Math.random() * colours)
}
