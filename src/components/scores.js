import { updateScores } from '../visuals/progress.js'

let level = 0
let levelProgress = 0
let totalScores = 0

function levelup() {
    level += 1
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
    return new Promise((resolve) => {
        levelProgress += n
        totalScores += n
        const needProgress = Math.floor(10 * Math.pow(1.5, level))

        checkNextLevel(needProgress, levelProgress)
        updateScores(levelProgress, needProgress)
        resolve()
    })
}

function checkNextLevel(needProgress, currentProgress) {
    if (currentProgress >= needProgress) {
        levelup()
    }
}

export function resetProgress() {
    level = 0
    levelProgress = 0
    totalScores = 0
}