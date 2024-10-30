//remove loader
window.addEventListener('load', function() {
    const loadingMessage = document.getElementById('loading-message')
    loadingMessage.remove()
})

import './style.css'
import { startScreen, canvas, clearCanvas, checkboxDraw } from './visuals/welcome.js'
import { fieldDraw } from './visuals/background.js'
import { fieldInit } from './components/game.js'
import { clickChecker } from './components/move.js'
import { checkboxDrawPos } from './utils/positions.js'
import { soundOn, playStart, playStartStop } from './utils/audio.js'

// game status: init - start screen, game - game is on
let gameStatus = 'init'

startScreen()
fieldInit()


canvas.addEventListener('click', function(e) {

    switch (gameStatus) {
        case 'init':
            if (clickSound(e)){ return }
            clearCanvas()
            fieldDraw()
            playStartStop()
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

function clickSound(e) {
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const startAudio = checkboxDrawPos()

    if (x > startAudio[0] && x < startAudio[0] + startAudio[2] && y > startAudio[1] && y < startAudio[1] + startAudio[2]) {
        soundOn()
        playStart()
        checkboxDraw()
        return true
    } else {
        return false
    }
}

export function gamestart() {
    gameStatus = 'init'
}