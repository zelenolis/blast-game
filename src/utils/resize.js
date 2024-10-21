export function startLogoSize (screenWidth, logoWidth, logoHeight) {
    let w = 0
    let h = 0
    if (logoWidth * 2 > screenWidth) {
        w = screenWidth / 2
        h = logoHeight / (logoWidth / w)
    } else {
        w = logoWidth
        h = logoHeight
    }
    return [w, h]
}

export function startFontSize (screenWidth) {
    const maxEnlarge = 700
    const maxFontSize = 70
    if (screenWidth > maxEnlarge) {
        return maxFontSize
    } else {
        return screenWidth / 10
    }
}