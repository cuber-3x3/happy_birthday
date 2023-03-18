function 点亮 () {
    led.plot(1, 0)
    led.plot(3, 0)
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            熄灭()
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            点亮()
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            熄灭()
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            点亮()
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Whole))
            熄灭()
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            点亮()
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            熄灭()
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
            点亮()
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
function 熄灭 () {
    led.unplot(1, 0)
    led.unplot(3, 0)
}
music.setTempo(120)
music.setBuiltInSpeakerEnabled(true)
