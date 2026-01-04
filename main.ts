let val = 0
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P0)
led.enable(false)
basic.forever(function () {
    val = irRemote.returnIrButton()
    serial.writeValue("IR", val)
    basic.pause(1000)
})
