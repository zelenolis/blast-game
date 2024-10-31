import Color1 from '../assets/set/1.png'
import Color2 from '../assets/set/2.png'
import Color3 from '../assets/set/3.png'
import Color4 from '../assets/set/4.png'
import Color5 from '../assets/set/5.png'
import Color6 from '../assets/set/6.png'
import Color7 from '../assets/set/7.png'
import Color8 from '../assets/set/8.png'
import Color0 from '../assets/set/0.png'
import SoundOn from '../assets/sound-on.png'
import SoundOff from '../assets/sound-off.png'
import { ctx, canvasW } from "./welcome.js";
import { fieldPos, levelPos, currentScorePos, totalScorePos, remixButtonPos, ingameAudioPos } from "../utils/positions.js";
import { darkColor, baseColor, lightColor } from "../constants.js";
import { startFontSize } from "../utils/resize.js";
import { field } from "../components/game.js";
import { getRemixes } from '../components/endgame.js'
import { getSound } from '../utils/audio.js'


const colorMap = {
    1: Color1,
    2: Color2,
    3: Color3,
    4: Color4,
    5: Color5,
    6: Color6,
    7: Color7,
    8: Color8,
    0: Color0,
}


export function textPrint(txt, coords, textColor = lightColor) {
    document.fonts.load('10pt "Scary"').then(() => {
        const textHeight = startFontSize(canvasW) / 1.5
        ctx.font = `${textHeight}px Scary`

        const textMetrics = ctx.measureText(txt)
        const textWidth = textMetrics.width;

        const textX = coords[0] + (coords[2] - textWidth) / 2;
        const textY = 1 + coords[1] + (coords[3] + textHeight) / 2;

        ctx.textAlign = "start"
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = textColor
        ctx.fillText(txt, textX, textY)
    })
}


function levelDraw() {
    const coords = levelPos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])

    const text = 'lvl. 0'

    textPrint(text, coords)
}

function currentScoreDraw() {
    const coords = currentScorePos()
    ctx.fillStyle = darkColor
    ctx.strokeStyle  = darkColor
    ctx.beginPath();
    ctx.roundRect(coords[0], coords[1], coords[2], coords[3], [10])
    ctx.stroke();
    ctx.fill();
}

function totalScoreDraw() {
    const coords = totalScorePos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[3])

    const text = 'scr 0'

    textPrint(text, coords)
}

export function fieldDraw() {
    const coords = fieldPos()
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[2])
    levelDraw()
    currentScoreDraw()
    totalScoreDraw()
    remixButtonDraw()
    switchAudioBox()

    for (let tile of field) {
        tileDraw(tile, coords)
    }
}

export function tilesRedraw() {
    const coords = fieldPos()
    ctx.fillStyle = darkColor
    ctx.fillRect(coords[0], coords[1], coords[2], coords[2])

    for (let tile of field) {
        tileDraw(tile, coords)
    }
}

function tileDraw(tile, coords) {
    const tileLenght = coords[2] / Math.sqrt(field.length)
    const tileX = coords[0] + tile.x * tileLenght
    const tileY = coords[1] + tile.y * tileLenght
    const tileImg = new Image()

    tileImg.onload = function() {
        ctx.drawImage(tileImg, tileX, tileY, tileLenght, tileLenght)
    }
    tileImg.src = colorMap[tile.color]
}

function remixButtonDraw() {
    const coords = remixButtonPos()
    ctx.strokeStyle  = darkColor
    ctx.fillStyle  = darkColor
    ctx.beginPath()
    ctx.roundRect(coords[0], coords[1], coords[2], coords[3], [10])
    ctx.stroke()
    ctx.fill()
    const text = `remix (${getRemixes()})`

    textPrint(text, coords)
}

export function switchAudioBox() {
    const coords = ingameAudioPos()
    ctx.fillStyle = baseColor
    ctx.fillRect(coords[0], coords[1], coords[3], coords[3])
    const soundImage = new Image()
    soundImage.src = getSound() ? SoundOn : SoundOff
    soundImage.onload = function() {
        ctx.drawImage(soundImage, coords[0], coords[1], coords[2], coords[2])
    }
}