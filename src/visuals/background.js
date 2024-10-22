import { canvas, ctx, canvasW, canvasH } from "./welcome.js";
import { fieldPos, levelPos, currentScorePos, totalScorePos } from "../utils/positions.js";
import { darkColor, baseColor } from "../constants.js";


function levelDraw() {
    const coords = levelPos()
    ctx.fillStyle = 'red'
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
}

function currentScoreDraw() {
    const coords = currentScorePos()
    ctx.fillStyle = 'green'
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
}

function totalScoreDraw() {
    const coords = totalScorePos()
    ctx.fillStyle = 'blue'
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])
}

export function fieldDraw() {
    const coords = fieldPos()
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[2])
}

function tileDraw() {}

function remixButtonDraw() {}

//header and footer height 12.5% of canvas height