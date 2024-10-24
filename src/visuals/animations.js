import { ctx } from "./welcome.js"
import { darkColor } from "../constants.js"
import Ghost from '../assets/ghost.png'


export function tileDestroy(x, y, length) {

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