import { baseColor } from '../constants.js'
import Pumpkin from '../assets/pumpkin.png'

const container = document.getElementById('container')
const canvas = document.createElement('canvas')
container.appendChild(canvas)

const canvasW = (canvas.width = container.offsetWidth)
const canvasH = (canvas.height = container.offsetHeight)

const ctx = canvas.getContext('2d')


export function startScreen() {
    ctx.fillStyle = baseColor
    ctx.fillRect(0, 0, canvasW, canvasH)
    const startImage = new Image()
    startImage.onload = function() {
        const x = canvasW / 2 - startImage.width / 2
        const y = canvasH / 3 - startImage.height / 2
        console.log(startImage.width)
        ctx.drawImage(startImage, x, y)
    }
    startImage.src = Pumpkin

}