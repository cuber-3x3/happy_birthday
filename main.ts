input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
        music.rest(music.beat(BeatFraction.Whole))
    }
})
music.setTempo(113)
music.setBuiltInSpeakerEnabled(true)
