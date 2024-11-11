
let buttonWasPressed: number = 0; // 0 bude nestisknuto a 1 bude stisknuto

while (true){

    if (input.buttonIsPressed(Button.A)) {
     let buttonWasPressed = 1;
     
 }
else{
    buttonWasPressed = 0
}
buttonWasPressed = input.buttonIsPressed(Button.A) ? 1 : 0
console.logValue("tlacitko", buttonWasPressed)
 basic.pause(50); // 50ms = 20x za sekundu
}
basic.showIcon(IconNames.Heart)