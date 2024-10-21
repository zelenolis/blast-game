import './style.css'
import { startScreen, canvas, clearCanvas } from './visuals/welcome.js'

startScreen()

canvas.addEventListener('click', function(e) {
    console.log('the game was started!')
})