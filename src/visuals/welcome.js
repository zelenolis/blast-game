import Back from '../assets/back.jpg'
import { startFontSize } from '../utils/resize.js'
import { baseColor, darkColor, lightColor } from '../constants.js'
import { resetRemixes } from '../components/endgame.js'
import { checkboxDrawPos } from '../utils/positions.js'


const container = document.getElementById('container')
export const canvas = document.createElement('canvas')
container.appendChild(canvas)

export const canvasW = (canvas.width = container.offsetWidth)
export const canvasH = (canvas.height = container.offsetHeight)

export const ctx = canvas.getContext('2d')


export function clearCanvas(col = baseColor) {
    ctx.fillStyle = col
    ctx.fillRect(0, 0, canvasW, canvasH)
}

function startLogoDraw() {
    const startImage = new Image()

    startImage.onload = function() {
        if (canvasW > canvasH) {
            ctx.drawImage(startImage, 0, canvasH - canvasW, canvasW, canvasW)
        } else {
            ctx.drawImage(startImage, 0, 0, canvasH, canvasH)
        }
    }
    startImage.src = Back
}

function startTextDraw() {
    document.fonts.load('10pt "Scary"').then(() => {
        ctx.font = `${startFontSize(canvasW)}px Scary`
        ctx.fillStyle = lightColor
        ctx.textAlign = "center"
        ctx.fillText('click to start', canvasW / 2, canvasH - canvasH / 2)
    })
    resetRemixes()
}

function checkboxDraw() {
    const coords = checkboxDrawPos()
    const height = startFontSize(canvasW) * 0.7
    ctx.strokeStyle  = lightColor
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.roundRect(coords[0], coords[1], height, height, [10])
    ctx.stroke()
}

function checkboxTextDraw() {
    const coords = checkboxDrawPos()
    const height = startFontSize(canvasW) * 0.7
    document.fonts.load('10pt "Scary"').then(() => {
        ctx.font = `${height}px Scary`
        ctx.fillStyle = lightColor
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.fillText('Sound', coords[0] + 2 * height, coords[1])
        checkboxDraw()
    })
}

export function startScreen() {
    clearCanvas(darkColor)
    startLogoDraw()
    checkboxTextDraw()
    startTextDraw()
}