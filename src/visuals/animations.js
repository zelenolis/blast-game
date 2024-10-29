import Color1 from '../assets/set/1.png'
import Color2 from '../assets/set/2.png'
import Color3 from '../assets/set/3.png'
import Color4 from '../assets/set/4.png'
import Color5 from '../assets/set/5.png'
import Color6 from '../assets/set/6.png'
import Color7 from '../assets/set/7.png'
import Color8 from '../assets/set/8.png'
import Ghost from '../assets/ghost.png'
import { ctx } from "./welcome.js"
import { darkColor } from "../constants.js"
import { fieldPos } from "../utils/positions.js"
import { field } from '../components/game.js'


const colorMap = {
    1: Color1,
    2: Color2,
    3: Color3,
    4: Color4,
    5: Color5,
    6: Color6,
    7: Color7,
    8: Color8,
}

function tileDestroy(x, y, length) {
    return new Promise(resolve => {
        clearTyle(x, y, length)
        const animationImage = new Image()
        animationImage.src = Ghost
        animationImage.onload = function() {
            ctx.drawImage(animationImage, x, y, length, length)
            resolve()
        }
    })
}

function clearTyle(x, y, length) {
    ctx.fillStyle = darkColor
    ctx.fillRect(x, y, length, length)
}

export async function destroyTiles(arr, fieldLenght) {
    const animationPromises = [];
    const frame = fieldPos()
    const tileLenght = frame[2] / Math.sqrt(fieldLenght)
    for (let item of arr) {
        animationPromises.push(tileDestroy((item.x * tileLenght + frame[0]), (item.y * tileLenght + frame[1]), tileLenght))
    }
    await Promise.all(animationPromises);
}

export function appearTile(x, y, color) {
    return new Promise(resolve => {
        const dimensions = getCoordsByTylePos(x, y)
        const tileImg = new Image()
        tileImg.src = colorMap[color]
        tileImg.onload = function() {
            ctx.fillStyle = darkColor
            ctx.fillRect(dimensions[0], dimensions[1], dimensions[2], dimensions[2])
            ctx.drawImage(tileImg, dimensions[0], dimensions[1], dimensions[2], dimensions[2])
            resolve()
        }
    })
    
}

export function appearTile1(x, y, color) {
    const dimensions = getCoordsByTylePos(x, y)
    const tileImg = new Image()
    tileImg.src = colorMap[color]
    let animateY = 0
    const animationspeed = 8


    tileImg.onload = function() {
        function animate() {
            ctx.fillStyle = darkColor
            ctx.fillRect(dimensions[0], dimensions[1], dimensions[2], animateY)
            ctx.drawImage(tileImg, dimensions[0], dimensions[1], dimensions[2], animateY)

            animateY += animationspeed
            if(animateY < dimensions[2]) {
                requestAnimationFrame(animate)
            } else {
                ctx.fillRect(dimensions[0], dimensions[1], dimensions[2], dimensions[2])
                ctx.drawImage(tileImg, dimensions[0], dimensions[1], dimensions[2], dimensions[2])
            }
        }
        animate()
    }
}

export async function fallingTyle(x, y, yShift, color) {
    const dimensions = getCoordsByTylePos(x, y)
    const xCoord = dimensions[0]
    const yCoord = dimensions[1]
    const tileLenght = dimensions[2]
    const fallingLenght = tileLenght * yShift
    return moveTile(xCoord, yCoord, tileLenght, fallingLenght, color).then(result => {
        return result
    })
}

function getCoordsByTylePos(x, y) {
    const frame = fieldPos()
    const tileLenght = frame[2] / Math.sqrt(field.length)
    const xCoord = x * tileLenght + frame[0]
    const yCoord = y * tileLenght + frame[1]
    return [xCoord, yCoord, tileLenght]
}

async function moveTile(xCoord, yCoord, tileLenght, fallingLenght, color) {
    return new Promise(resolve => {
        const tileImg = new Image()
        tileImg.src = colorMap[color]
        let animateY = 0
        const animationspeed = 8

        tileImg.onload = function() {
            function animate() {
                ctx.fillStyle = darkColor
                ctx.fillRect(xCoord, yCoord + animateY, tileLenght, tileLenght)
                ctx.drawImage(tileImg, xCoord, yCoord + animateY, tileLenght, tileLenght)

                animateY += animationspeed
                if(animateY <= fallingLenght) {
                    requestAnimationFrame(animate)
                } else {
                    ctx.fillStyle = darkColor
                    ctx.fillRect(xCoord, yCoord + fallingLenght, tileLenght, tileLenght)
                    ctx.drawImage(tileImg, xCoord, yCoord + fallingLenght, tileLenght, tileLenght)
                    resolve()
                }
            }
            animate()
        }
    })
}