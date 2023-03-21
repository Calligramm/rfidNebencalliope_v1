let id = 0
OLED12864_I2C.init(60)
radio.setGroup(1)
MFRC522.Init(
DigitalPin.C9,
DigitalPin.C8,
DigitalPin.C7,
DigitalPin.P0
)
basic.forever(function () {
    id = MFRC522.testID()
    if (id != 0) {
        radio.sendNumber(id)
        OLED12864_I2C.showNumber(
        0,
        0,
        id,
        1
        )
        while (MFRC522.testID() != 0) {
            basic.pause(50)
        }
    }
})
