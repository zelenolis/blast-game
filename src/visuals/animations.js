import { ctx } from "./welcome.js"
import { darkColor } from "../constants"
import Ghost from '../assets/ghost.png'


export function tileDestroy(x, y, length) {

    clearTyle(x, y, length)

    const animationImage = new Image()
    animationImage.src = Ghost

    animationImage.onload = function() {
        ghostDisappear(x, y, length, animationImage)
    }
}

function clearTyle(x, y, length) {
    ctx.fillStyle = darkColor
    ctx.fillRect(x, y, x + length, y + length)
}

function ghostDisappear(x, y, length, animationImage) {
    let opacity = 1
    let speed = 0.01

    while (opacity > 0) {
        ctx.drawImage(animationImage, x, y, x + length, y + length)
        opacity -= speed
        ctx.globalAlpha = opacity
    }
    ctx.globalAlpha = 1
}