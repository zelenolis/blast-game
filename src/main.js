import './style.css'
import { startScreen, canvas, clearCanvas } from './visuals/welcome.js'
import { fieldDraw } from './visuals/background.js'
import { fieldInit } from './components/game.js'

startScreen()
fieldInit()

canvas.addEventListener('click', function(e) {
    clearCanvas()
    fieldDraw()
})