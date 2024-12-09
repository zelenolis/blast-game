import { getLevel, getTotalScores } from '../components/scores.js'
import {
    levelPos,
    currentScorePos,
    totalScorePos,
    remixButtonPos,
} from '../utils/positions.js'
import {
    lightColor,
    baseColor,
    darkColor,
    progressBarcolor,
} from '../constants.js'
import { ctx, canvasW, canvasH } from './welcome.js'
import { textPrint } from './background.js'
import { getRemixes } from '../components/endgame.js'

let currentLevel = 0
let lastProgress = 0

export function updateScores(levelProgress, needProgress) {
    const checkedLevel = getLevel()
    if (checkedLevel > currentLevel) {
        currentLevel = checkedLevel
        lastProgress = 0
        redrawLevel()
    }
    redrawProgress(levelProgress, needProgress)
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

async function redrawProgress(progress, needProgress) {
    const coords = currentScorePos()
    ctx.fillStyle = darkColor
    ctx.strokeStyle = darkColor
    ctx.beginPath()
    ctx.roundRect(coords[0], coords[1], coords[2], coords[3], [10])
    ctx.stroke()
    ctx.fill()

    await drawBar(coords, progress, needProgress)
}

function drawBar(coords, progress, needProgress) {
    const animationSpeed = 1
    return new Promise((resolve) => {
        function animate() {
            ctx.fillStyle = progressBarcolor
            ctx.strokeStyle = progressBarcolor
            ctx.beginPath()
            ctx.roundRect(
                coords[0],
                coords[1],
                coords[2] * (lastProgress / needProgress),
                coords[3],
                [10]
            )
            ctx.fill()

            lastProgress += animationSpeed
            if (lastProgress < progress) {
                requestAnimationFrame(animate)
            } else {
                lastProgress = progress
                resolve()
            }
        }
        animate()
    })
}

function redrawTotalScore() {
    const coords = totalScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
    const text = `scr ${getTotalScores()}`
    textPrint(text, coords)
    ctx.fillStyle = darkColor
}

export function redrawRemixButton(
    backColor = darkColor,
    textColor = lightColor
) {
    const coords = remixButtonPos()
    ctx.strokeStyle = backColor
    ctx.fillStyle = backColor
    ctx.beginPath()
    ctx.roundRect(coords[0], coords[1], coords[2], coords[3], [10])
    ctx.stroke()
    ctx.fill()
    const text = `remix (${getRemixes()})`

    textPrint(text, coords, textColor)
}

export function gameOverDraw() {
    const coords = [0, 0, canvasW, canvasH]
    ctx.globalAlpha = 0.5
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
    const text = `GAME OVER`
    textPrint(text, coords, lightColor)
    ctx.globalAlpha = 1
}

export function resetLevel() {
    currentLevel = 0
    lastProgress = 0
}
