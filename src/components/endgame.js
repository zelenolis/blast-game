import { remixes } from "../constants.js";
import { getNeighbors } from "./move.js";
import { field } from "./game.js";
import { redrawRemixButton } from "../visuals/progress.js";
import { alertColor, progressBarcolor } from "../constants.js";

let remixRemains = 0

export function resetRemixes() {
    remixRemains = remixes
}
export function getRemixes() {
    return remixRemains
}

export function decreaseRemixes() {
    remixRemains -= 1
}

export function checkEndGame() {
    return new Promise(resolve => {
        for (let i = 0; i < field.length; i++) {
            if (getNeighbors(field[i].x, field[i].y, field[i].color).length > 0) {
                resolve(false)
                return
            }
        }
        if (remixRemains < 1) {
            resolve(true)
        } else {
            redrawRemixButton(progressBarcolor, alertColor)
            resolve(false)
        }
    })
}