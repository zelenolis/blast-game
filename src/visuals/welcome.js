import Pumpkin from '../assets/pumpkin.png'
import { startLogoSize, startFontSize } from '../utils/resize.js'
import { baseColor, darkColor } from '../constants.js'


const container = document.getElementById('container')
const canvas = document.createElement('canvas')
container.appendChild(canvas)

const canvasW = (canvas.width = container.offsetWidth)
const canvasH = (canvas.height = container.offsetHeight)

const ctx = canvas.getContext('2d')


function clearCanvas() {
    ctx.fillStyle = baseColor
    ctx.fillRect(0, 0, canvasW, canvasH)
}

function startLogoDraw() {
    
    const startImage = new Image()

    startImage.onload = function() {
        const dimensions = startLogoSize(canvasW, startImage.width, startImage.height)
        const x = canvasW / 2 - dimensions[0] / 2
        const y = canvasH / 3 - dimensions[1] / 2
        ctx.drawImage(startImage, x, y, dimensions[0], dimensions[1])
    }
    startImage.src = Pumpkin
}

function startTextDraw() {
    document.fonts.load('10pt "Scary"').then(() => {
        ctx.font = `${startFontSize(canvasW)}px Scary`
        ctx.fillStyle = darkColor
        ctx.textAlign = "center"
        ctx.fillText('click to start', canvasW / 2, canvasH - canvasH / 3)
    })
}

export function startScreen() {
    clearCanvas()
    startLogoDraw()
    startTextDraw()
}