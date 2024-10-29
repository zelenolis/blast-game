import { updateScores } from "../visuals/progress.js"

let level = 0
let levelProgress = 0
let totalScores = 0

function levelup() {
    level +=1
    levelProgress = 0
}

export function getLevel() {
    return level
}

export function getLevelProgress() {
    return levelProgress
}

export function getTotalScores() {
    return totalScores
}

export function levelProgressUp(n) {
    return new Promise(resolve => {
        levelProgress += n
        totalScores += n

        checkNextLevel(level, levelProgress)
        updateScores()
        resolve()
    })
}

function checkNextLevel(currentLevel, currentProgress) {
    const needProgress = Math.floor(10 * Math.pow(1.5, currentLevel))
    if (currentProgress >= needProgress) {
        levelup()
    }
}