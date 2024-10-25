import { getLevel } from "../components/scores.js"

let currentLevel = 0

export function updateScores() {
    if (getLevel() > currentLevel) {
        redrawLevel()
    }
    redrawProgress()
    redrawTotalScore()
}

function redrawLevel() {
    //
}

function redrawProgress() {
    //
}

function redrawTotalScore() {
    //
}