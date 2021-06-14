basic.forever(function () {
    if (input.acceleration(Dimension.X) == 0 && input.acceleration(Dimension.X) < 200) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
    if (input.acceleration(Dimension.X) >= 60 && input.acceleration(Dimension.X) <= 200) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . # .
            . . . . #
            `)
    }
    if (input.acceleration(Dimension.X) >= 201 && input.acceleration(Dimension.X) <= 400) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . #
            . . # . #
            . . . # .
            `)
    }
    if (input.acceleration(Dimension.X) >= 401 && input.acceleration(Dimension.X) <= 800) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # . # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) >= 801 && input.acceleration(Dimension.X) <= 1023) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # . # . .
            # . # . .
            . # . . .
            `)
    }
})
