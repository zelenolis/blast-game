import { filedX, filedY, colours } from '../constants.js'
import { checkEnd } from './endgame.js';

export const field = [];

class Tile {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
}

export function fieldInit() {
    do {
        field.length = 0;
        for (let i = 0; i < filedX; i++) {
            for (let j = 0; j < filedY; j++) {
                field.push(new Tile(i, j, randomColor()))
            }
        }
    } while (checkEnd()) 
}

export function newTile(x, y) {
    return {x: x, y: y, color: randomColor()}
}

function randomColor() {
    const bomb = 1 + Math.floor(Math.random() * 20)
    if (bomb === 20) {
        return 0
    }
    return 1 + Math.floor(Math.random() * colours)
}


export function remixField() {
    const allColors = field.map(item => item.color);
    for (let i = allColors.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = allColors[i]
        allColors[i] = allColors[j]
        allColors[j] = temp
    }
    field.forEach((item, index) => {
        item.color = allColors[index]
    })
}