import { fieldPos, remixButtonPos } from '../utils/positions.js'
import { field } from './game.js'
import { tileDestroy } from '../visuals/animations.js'


export function clickChecker(x, y) {
    const frame = fieldPos()
    const mix = remixButtonPos()

    if (x > frame[0] && x < frame[0] + frame[2] && y > frame[1] && y < frame[1] + frame[2]) {
        findTileCoords(x, y, frame)
    }

    if (x > mix[0] && x < mix[0] + mix[2] && y > mix[1] && y < mix[1] + mix[3]) {
        console.log('Remix!')
    }
}

function findTileCoords(x, y, frame) {
    const tileLenght = frame[2] / Math.sqrt(field.length)
    const xField = Math.floor((x - frame[0]) / tileLenght)
    const yField = Math.floor((y - frame[1]) / tileLenght)
    findTileArray(xField, yField)
    tileDestroy((xField * tileLenght + frame[0]), (yField * tileLenght + frame[1]), tileLenght)
}

function findTileArray(x, y) {
    for (let tile of field) {
        if (tile.x === x && tile.y === y) {
            console.log(tile)
        }
    }
}

function checkPairs() {
    //
}

function getNeighbors(x, y, color) {
    const matches = []
    const directions = [
        {dx: 1, dy: 0},
        {dx: 0, dy: 1},
        {dx: -1, dy: 0},
        {dx: 0, dy: -1}
    ]
    for (let direction of directions) {
        const newX = x + direction.dx
        const newY = y + direction.dy
        const neighbor = field.find(tile => tile.x === newX && tile.y === newY)
        if (neighbor && neighbor.color === color) {
            matches.push(neighbor)
        }
    }
    return matches
}

function getAllConnectedTiles() {
    //
}