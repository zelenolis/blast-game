import { remixField } from "./game.js";
import { remixes } from "../constants.js";

let remixRemains = 0

export function resetRemixes() {
    remixRemains = remixes
}

function decreaseRemixes() {
    remixRemains -= 1
}

function checkEndGame() {
    //
}