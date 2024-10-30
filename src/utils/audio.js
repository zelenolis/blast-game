import Pop from '../assets/pop.mp3'
import Click from '../assets/click.mp3'
import Miss from '../assets/miss.mp3'
import Start from '../assets/Halloween-song.mp3'

const popSound = new Audio(Pop)
popSound.volume = 0.5
const clickSound = new Audio(Click)
clickSound.volume = 0.5
const missSound = new Audio(Miss)
missSound.volume = 0.5
const startSound = new Audio(Start)
startSound.volume = 0.5

let soundIsOn = false

export function playPop() {
    if (soundIsOn) {
        popSound.play()
    }
}

export function playClick() {
    if (soundIsOn) {
        clickSound.play()
    }
}

export function playMiss() {
    if (soundIsOn) {
        missSound.play()
    }    
}

export async function playStart() {
    if (soundIsOn) {
        startSound.play()
        startSound.loop = true
    }
}

export async function playStartStop() {
    startSound.pause()
    startSound.currentTime = 0;
}

export function soundOn() {
    soundIsOn = !soundIsOn
    if (!soundIsOn) {
        playStartStop()
    }
}

export function getSound() {
    return soundIsOn
}