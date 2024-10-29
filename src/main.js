import './style.css'
import { startScreen, canvas, clearCanvas } from './visuals/welcome.js'
import { fieldDraw } from './visuals/background.js'
import { fieldInit } from './components/game.js'
import { clickChecker } from './components/move.js'

// game status: init - start screen, game - game is on
let gameStatus = 'init'

startScreen()
fieldInit()


canvas.addEventListener('click', function(e) {

    switch (gameStatus) {
        case 'init':
            clearCanvas()
            fieldDraw()
            gameStatus = 'game'
            break
        case 'game':
            clickCoords(e)
    }
})

function clickCoords(e) {
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    clickChecker(x, y)
}

export function gamestart() {
    gameStatus = 'init'
}