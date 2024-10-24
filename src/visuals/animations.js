import Ghost from '../assets/ghost.png'
import { ctx } from "./welcome.js"
import { darkColor } from "../constants.js"
import { fieldPos } from "../utils/positions.js"


function tileDestroy(x, y, length) {

    clearTyle(x, y, length)

    const animationImage = new Image()
    animationImage.src = Ghost

    animationImage.onload = function() {
        ctx.drawImage(animationImage, x, y, length, length)
    }
}

function clearTyle(x, y, length) {
    ctx.fillStyle = darkColor
    ctx.fillRect(x, y, length, length)
}

export function destroyTiles(arr, fieldLenght) {
    const frame = fieldPos()
    const tileLenght = frame[2] / Math.sqrt(fieldLenght)
    for (let item of arr) {
        tileDestroy((item.x * tileLenght + frame[0]), (item.y * tileLenght + frame[1]), tileLenght)
    }
}