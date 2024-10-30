import Pop from '../assets/pop.mp3'
import Click from '../assets/click.mp3'
import Miss from '../assets/miss.mp3'
import Start from '../assets/Halloween-song.mp3'

const popSound = new Audio(Pop)
const clickSound = new Audio(Click)
const missSound = new Audio(Miss)
const startSound = new Audio(Start)

export function playPop() {
    popSound.play()
}

export function playClick() {
    clickSound.play()
}

export function playMiss() {
    missSound.play()
}

export async function playStart() {
    startSound.play();
}