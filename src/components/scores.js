let level = 1
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
    levelProgress += n
    totalScores += n
}

