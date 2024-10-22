import { canvas, ctx, canvasW, canvasH } from "./welcome.js";
import { fieldPos } from "../utils/positions.js";
import { darkColor } from "../constants.js";


function levelDraw() {}

function currentScoreDraw() {}

function totalScoreDraw() {}

export function fieldDraw() {
    const coords = fieldPos()
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[2])
}

function tileDraw() {}

function remixButtonDraw() {}

//header and footer height 12.5% of canvas height