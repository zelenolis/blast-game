import { getLevel } from "../components/scores.js"
import { levelPos } from "../utils/positions"
import { baseColor } from "../constants"

let currentLevel = 0

export function updateScores() {
    const checkedLevel = getLevel()
    if (checkedLevel > currentLevel) {
        currentLevel = checkedLevel
        redrawLevel()
    }
    redrawProgress()
    redrawTotalScore()
}

function redrawLevel() {
    const coords = levelPos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
    const text = `'lvl. ${currentLevel}`
    textPrint(text, coords)

}

function redrawProgress() {
    //
}

function redrawTotalScore() {
    //
}