let value = 0
let diceSides = 6
let lowestDice = 2
let highestDice = 99
let randNumber:number
let locked = false
whaleysans.showNumber(diceSides)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (diceSides > lowestDice) {
            diceSides += 0 - 1
        }
        basic.showNumber(diceSides)
    }
    if (input.buttonIsPressed(Button.B)) {
        if (diceSides < highestDice) {
            diceSides += 1
        }
        basic.showNumber(diceSides)
    }
    if (input.isGesture(Gesture.Shake) && !(locked)) {
       let value = randint(lowestDice, diceSides)
        basic.showNumber(value)
        locked = true
    }
    if (input.logoIsPressed()) {
        locked = false
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.setVolume(100)
        basic.showNumber(diceSides)
    }
}
