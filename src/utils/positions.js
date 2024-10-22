import { canvasW, canvasH } from "../visuals/welcome.js";

const headerHeight = 0.15
const fieldHeight = 0.7
const footerHeight = 0.15
const headerThirdPart = 0.3

export function levelPos() {
    const rectDimension = [0, 0, canvasW * headerThirdPart, canvasH * footerHeight]
    return rectDimension
}

export function currentScorePos() {
    const rectDimension = [
        canvasW * headerThirdPart, 
        0, 
        canvasW - 2 * canvasW * headerThirdPart, 
        canvasH * footerHeight]
    return rectDimension
}

export function totalScorePos() {
    const rectDimension = [
        canvasW - (canvasW * headerThirdPart), 
        0, 
        canvasW * headerThirdPart, 
        canvasH * footerHeight]
    return rectDimension
}

export function fieldPos() {
    if (canvasW > canvasH) {
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

export function remixButtonPos() {}