import Pop from '../assets/pop.mp3'
import Click from '../assets/click.mp3'
import Miss from '../assets/miss.mp3'
import Start from '../assets/Halloween-song.mp3'

const popSound = new Audio(Pop)
const clickSound = new Audio(Click)
const missSound = new Audio(Miss)
const startSound = new Audio(Start)

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
        startSound.play();
    }
}

export async function playStartStop() {
    startSound.play();
    startSound.pause();
    startSound.currentTime = 0;
}