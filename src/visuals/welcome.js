import { baseColor, darkColor } from '../constants.js'
import Pumpkin from '../assets/pumpkin.png'

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

function startLogoDraw() {}

export function startScreen() {
    clearCanvas()
    const startImage = new Image()
    startImage.onload = function() {
        const x = canvasW / 2 - startImage.width / 2
        const y = canvasH / 3 - startImage.height / 2
        ctx.drawImage(startImage, x, y)
    }
    startImage.src = Pumpkin

    document.fonts.load('10pt "Scary"').then(() => {
        ctx.font = '70px Scary'
        ctx.fillStyle = darkColor
        ctx.textAlign = "center"
        ctx.fillText('click to start', canvasW / 2, canvasH - canvasH / 3)
    })
}