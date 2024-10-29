import { remixField } from "./game.js";
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
        for (let tile of field) {
            const endMove = getNeighbors(tile.x, tile.y, tile.color)
            if (endMove[0]) {
                return
            }
        }
        redrawRemixButton(progressBarcolor, alertColor)
        console.log('endgame')
        resolve()
    })
    
}