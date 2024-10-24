import { fieldPos, remixButtonPos } from '../utils/positions.js'
import { field } from './game.js'
import { destroyTiles } from '../visuals/animations.js'
import { filedX, filedY } from '../constants.js'
import { arraySubstract } from '../utils/misc.js'


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
}

function findTileArray(x, y) {
    for (let tile of field) {
        if (tile.x === x && tile.y === y) {
            if (getNeighbors(x,y, tile.color).length === 0) {
                return
            }
            getAllConnectedTiles(x, y)
        }
    }
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

function getAllConnectedTiles(x, y) {
    const startTile = field.find(tile => tile.x === x && tile.y === y)
    if (!startTile) { return }

    const allITiles = []
    const queue = [startTile]
    const checked = new Set([`${x},${y}`])

    while (queue.length > 0) {
        const current = queue.shift()
        allITiles.push(current)
        const neighbors = getNeighbors(current.x, current.y, startTile.color)
        for (let neighbor of neighbors) {
            const key = `${neighbor.x},${neighbor.y}`
            if (!checked.has(key)) {
                checked.add(key)
                queue.push(neighbor);
            }
        }
    }
    clearAndCreate(allITiles)
    destroyTiles(allITiles, field.length)
}

function clearAndCreate(allITiles) {
    for (let i = 0; i < filedX; i++) {
        const destroyedTiles = allITiles.filter(item => item.x === i)
        if (destroyedTiles.length > 0) {
            const column = field.filter(tile => tile.x === i)
            columnSort(arraySubstract(column, destroyedTiles))
        }
    }
}

function columnSort(arr) {
    const newColumn = []
    let missings = 0
    for (let i = filedY - 1; i >=0; i--) {
        let item = arr.find(e => e.y === i)
        if (!item) {
            missings++
        } else {
            if (missings > 0) {
                console.log(`{tile ${item.y}} became {tile ${i + missings}}`)
            }
            item.y = i + missings
            newColumn.push(item)
        }
    }
    newColumn.reverse()
    console.log(newColumn)
}