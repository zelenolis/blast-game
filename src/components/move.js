import { fieldPos, remixButtonPos, ingameAudioPos } from '../utils/positions.js'
import { field, newTile } from './game.js'
import {
    destroyTiles,
    fallingTile,
    appearTile,
    explosion,
} from '../visuals/animations.js'
import { filedX, filedY, alertColor, progressBarcolor } from '../constants.js'
import { arraySubstract } from '../utils/misc.js'
import { levelProgressUp } from './scores.js'
import { checkEndGame, checkEnd } from './endgame.js'
import { getRemixes, decreaseRemixes, resetRemixes } from './endgame.js'
import { remixField, fieldInit } from './game.js'
import { tilesRedraw, switchAudioBox } from '../visuals/background.js'
import {
    redrawRemixButton,
    gameOverDraw,
    resetLevel,
} from '../visuals/progress.js'
import { gamestart } from '../main.js'
import {
    playClick,
    playMiss,
    soundOn,
    playStart,
    playExplosion,
} from '../utils/audio.js'

export function clickChecker(x, y) {
    const frame = fieldPos()
    const mix = remixButtonPos()
    const audioOn = ingameAudioPos()

    if (
        x > audioOn[0] &&
        x < audioOn[0] + audioOn[2] &&
        y > audioOn[1] &&
        y < audioOn[1] + audioOn[2]
    ) {
        soundOn()
        switchAudioBox()
    }

    if (
        x > frame[0] &&
        x < frame[0] + frame[2] &&
        y > frame[1] &&
        y < frame[1] + frame[2]
    ) {
        findTileCoords(x, y, frame)
    }

    if (
        x > mix[0] &&
        x < mix[0] + mix[2] &&
        y > mix[1] &&
        y < mix[1] + mix[3]
    ) {
        if (getRemixes() < 1) {
            return
        }
        decreaseRemixes()
        remixField()
        tilesRedraw()
        checkRedrawMoves()
    }
}

function checkRedrawMoves() {
    if (checkEnd()) {
        redrawRemixButton(progressBarcolor, alertColor)
    } else {
        redrawRemixButton()
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
            if (tile.color === 0) {
                bombFound()
                return
            }
            if (getNeighbors(x, y, tile.color).length === 0) {
                playMiss()
                return
            }
            getAllConnectedTiles(x, y)
            playClick()
        }
    }
}

async function bombFound() {
    const animationPromises = []
    playExplosion()
    for (let item of field) {
        animationPromises.push(explosion(item.x, item.y))
    }
    await Promise.all(animationPromises)
    fieldInit()
    tilesRedraw()
    await levelProgressUp(field.length)
}

export function getNeighbors(x, y, color) {
    const matches = []
    const directions = [
        { dx: 1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: -1 },
    ]
    for (let direction of directions) {
        const newX = x + direction.dx
        const newY = y + direction.dy
        const neighbor = field.find(
            (tile) => tile.x === newX && tile.y === newY
        )
        if (neighbor && neighbor.color === color) {
            matches.push(neighbor)
        }
    }
    return matches
}

async function getAllConnectedTiles(x, y) {
    const startTile = field.find((tile) => tile.x === x && tile.y === y)
    if (!startTile) {
        return
    }

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
                queue.push(neighbor)
            }
        }
    }
    await destroyTiles(allITiles, field.length)
    clearAndCreate(allITiles)
}

async function clearAndCreate(allITiles) {
    for (let i = 0; i < filedX; i++) {
        const destroyedTiles = allITiles.filter((item) => item.x === i)
        if (destroyedTiles.length > 0) {
            const column = field.filter((tile) => tile.x === i)
            await columnSort(arraySubstract(column, destroyedTiles), i)
        }
    }
    await checkForEnd()
}

async function columnSort(arr, colX) {
    const newColumn = []
    let missings = 0
    const animationPromises = []

    for (let i = filedY - 1; i >= 0; i--) {
        let item = arr.find((e) => e.y === i)
        if (!item) {
            missings++
        } else {
            if (missings > 0) {
                animationPromises.push(
                    fallingTile(item.x, item.y, missings, item.color)
                )
            }
            item.y = i + missings
            newColumn.push(item)
        }
    }
    await Promise.all(animationPromises)
    await levelProgressUp(missings)
    newColumn.reverse()
    await fillColumn(newColumn, colX)
}

async function fillColumn(newColumn, colX) {
    const missingCount = filedY - newColumn.length
    for (let i = 0; i < missingCount; i++) {
        const item = newTile(colX, i)
        await appearTile(item.x, item.y, item.color)
        newColumn.unshift(item)
    }
    await updateField(newColumn)
}

function updateField(column) {
    return new Promise((resolve) => {
        for (let item of column) {
            for (let tile of field) {
                if (
                    item.x === tile.x &&
                    item.y === tile.y &&
                    item.color !== tile.color
                ) {
                    tile.color = item.color
                }
            }
        }
        resolve()
    })
}

async function checkForEnd() {
    const end = await checkEndGame()
    if (end) {
        playStart()
        gameOverDraw()
        gamestart()
        fieldInit()
        resetLevel()
        resetRemixes()
    }
}
