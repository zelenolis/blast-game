import { canvas, ctx, canvasW, canvasH } from "./welcome.js";
import { fieldPos, levelPos, currentScorePos, totalScorePos } from "../utils/positions.js";
import { darkColor, baseColor, lightColor } from "../constants.js";
import { startFontSize } from "../utils/resize.js";


function textPrint(txt, coords) {
    document.fonts.load('10pt "Scary"').then(() => {
        const textHeight = startFontSize(canvasW) / 1.5
        ctx.font = `${textHeight}px Scary`

        const textMetrics = ctx.measureText(txt)
        const textWidth = textMetrics.width;

        const textX = coords[0] + (coords[2] - textWidth) / 2;
        const textY = coords[1] + (coords[3] + textHeight) / 2;

        ctx.textAlign = "start"
        ctx.fillStyle = lightColor
        ctx.fillText(txt, textX, textY)
    })
}


function levelDraw() {
    const coords = levelPos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])

    const text = 'lvl. 0'

    textPrint(text, coords)
}

function currentScoreDraw() {
    const coords = currentScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])

    const text = 'next lvl. 10'

    textPrint(text, coords)
}

function totalScoreDraw() {
    const coords = totalScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])

    const text = 'scr 0'

    textPrint(text, coords)
}

export function fieldDraw() {
    const coords = fieldPos()
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[2])
    levelDraw()
    currentScoreDraw()
    totalScoreDraw()
}

function tileDraw() {}

function remixButtonDraw() {}