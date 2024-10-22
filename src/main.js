import './style.css'
import { startScreen, canvas, clearCanvas } from './visuals/welcome.js'
import { fieldDraw } from './visuals/background.js'

startScreen()

canvas.addEventListener('click', function(e) {
    clearCanvas()
    fieldDraw()
})