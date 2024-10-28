import { getLevel, getLevelProgress, getTotalScores } from "../components/scores.js"
import { levelPos, currentScorePos, totalScorePos } from "../utils/positions.js"
import { baseColor, darkColor } from "../constants.js"
import { ctx } from "./welcome.js"
import { textPrint } from "./background.js"

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
    ctx.fillStyle = darkColor
}

function redrawProgress() {
    const needProgress = Math.floor(10 * Math.pow(1.5, currentLevel))
    const progress = getLevelProgress()
    const coords = currentScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
    const text = `next lvl. ${needProgress - progress}`
    textPrint(text, coords)
    ctx.fillStyle = darkColor
}

function redrawTotalScore() {
    const coords = totalScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
    const text = `scr ${getTotalScores()}`
    textPrint(text, coords)
    ctx.fillStyle = darkColor
}