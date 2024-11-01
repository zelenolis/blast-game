import { canvasW, canvasH } from '../visuals/welcome.js'
import { startFontSize } from './resize.js'

const headerHeight = 0.15
const fieldHeight = 0.7
const footerHeight = 0.15
const headerThirdPart = 0.3
const padding = 10

export function checkboxDrawPos() {
    const height = startFontSize(canvasW) * 0.7
    const rectDimension = [0 + height, 0 + height, height, height]
    return rectDimension
}

export function levelPos() {
    const rectDimension = [
        0,
        0,
        canvasW * headerThirdPart,
        canvasH * footerHeight,
    ]
    return rectDimension
}

export function currentScorePos() {
    const padding = 10
    const rectDimension = [
        canvasW * headerThirdPart + padding,
        0 + 3 * padding,
        canvasW - 2 * canvasW * headerThirdPart - 2 * padding,
        canvasH * footerHeight - 6 * padding,
    ]
    return rectDimension
}

export function totalScorePos() {
    const rectDimension = [
        canvasW - canvasW * headerThirdPart,
        0,
        canvasW * headerThirdPart,
        canvasH * footerHeight,
    ]
    return rectDimension
}

export function fieldPos() {
    if (
        canvasW > canvasH ||
        canvasW + canvasW * (footerHeight + headerHeight) + padding * 4 >
            canvasH
    ) {
        const filedLenght = canvasH * fieldHeight
        const y = canvasH * headerHeight
        const x = (canvasW - filedLenght) / 2
        return [x, y, filedLenght]
    } else {
        const filedLenght = canvasW
        const y = canvasH * headerHeight
        const x = 0
        return [x, y, filedLenght]
    }
}

export function remixButtonPos() {
    const field = fieldPos()
    const rectDimension = [
        canvasW * headerThirdPart + padding,
        canvasH * footerHeight + field[2] + padding,
        canvasW - 2 * canvasW * headerThirdPart - 2 * padding,
        canvasH * footerHeight - 2 * padding,
    ]
    return rectDimension
}

export function ingameAudioPos() {
    const field = fieldPos()
    const height = startFontSize(canvasW) * 0.7
    const rectDimension = [
        0 + height,
        canvasH * footerHeight * 1.5 + field[2] - padding,
        height,
        height,
    ]
    return rectDimension
}
