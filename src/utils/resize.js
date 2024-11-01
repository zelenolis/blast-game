export function startFontSize(screenWidth) {
    const maxEnlarge = 700
    const maxFontSize = 70
    if (screenWidth > maxEnlarge) {
        return maxFontSize
    } else {
        return screenWidth / 10
    }
}
