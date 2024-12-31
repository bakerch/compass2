let direction = 0
basic.pause(200)
basic.showIcon(IconNames.Happy)
input.calibrateCompass()
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 225 && direction < 314) {
        basic.showArrow(ArrowNames.East)
    } else {
        if (direction > 135 && direction < 224) {
            basic.showArrow(ArrowNames.South)
        } else {
            if (direction > 45 && direction < 134) {
                basic.showArrow(ArrowNames.West)
            } else {
                if (direction > 0 && direction < 44) {
                    basic.showArrow(ArrowNames.North)
                } else {
                    if (direction > 315 && direction < 360) {
                        basic.showArrow(ArrowNames.North)
                    } else {
                        basic.clearScreen()
                    }
                }
            }
        }
    }
})
