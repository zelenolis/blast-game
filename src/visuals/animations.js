import Color1 from '../assets/set/1.png'
import Color2 from '../assets/set/2.png'
import Color3 from '../assets/set/3.png'
import Color4 from '../assets/set/4.png'
import Color5 from '../assets/set/5.png'
import Color6 from '../assets/set/6.png'
import Color7 from '../assets/set/7.png'
import Color8 from '../assets/set/8.png'
import Ghost from '../assets/ghost.png'
import { ctx } from "./welcome.js"
import { darkColor } from "../constants.js"
import { fieldPos } from "../utils/positions.js"


const colorMap = {
    1: Color1,
    2: Color2,
    3: Color3,
    4: Color4,
    5: Color5,
    6: Color6,
    7: Color7,
    8: Color8,
}

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

export function fallingTile(x, y, length, color) {
    const tileImg = new Image()
    tileImg.src = colorMap[color]
    let animateY = 0


    tileImg.onload = function() {
        function animate() {
            ctx.fillStyle = darkColor
            ctx.fillRect(x, y, length, length)
            ctx.drawImage(tileImg, x, y, length, animateY)

            animateY += 5
            if(animateY < length) {
                requestAnimationFrame(animate)
            }
        }
        animate()
    }
}