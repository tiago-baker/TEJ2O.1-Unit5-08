/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program tepper motor back and forth
*/

// Variables
let distanceToObject: number = 0
let degrees = 90

// while statement
while (true) {
    // Clear screen and read sonar distance
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    

    // If object is closer than 10 cm, reverse and turn right
    if (distanceToObject < 10) {
        // Reverse both motors for about 10 cm
        robotbit.StpCarMove(-10, 48)
        basic.pause(500)

        // Turn 90 degrees
        robotbit.StepperDegree(robotbit.Steppers.M1, 0.25)
    }

    // If distance is 10 cm or more, move forward 10 cm
    if (distanceToObject >= 10) {
        // move forward 10cm
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        basic.pause(500)
    }

}
