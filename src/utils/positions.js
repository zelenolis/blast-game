import { canvasW, canvasH } from "../visuals/welcome";

const headerHeight = 0.15
const fieldHeight = 0.7
const footerHeight = 0.15

export function levelPos() {}

export function currentScorePos() {}

export function totalScorePos() {}

export function fieldPos() {
    if (canvasW > canvasH) {
        const filedLenght = canvasH * fieldHeight
        y = canvasH * headerHeight
        x = (canvasW - filedLenght) / 2
        return [x, y, filedLenght]
    } else {
        const filedLenght = canvasW
        y = canvasH * fieldHeight
        x = 0
        return [x, y, filedLenght]
    }
}

export function remixButtonPos() {}