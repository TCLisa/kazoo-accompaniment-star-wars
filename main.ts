/**
 * Not Quite
 */
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
})
