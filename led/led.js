const Gpio = require('onoff').Gpio;
const sleep = require('sleep');
const led = new Gpio(4, 'out');
console.log('Led On');
led.writeSync(1);
sleep.sleep(5);
led.writeSync(0);
console.log('Led Off');
led.unexport();

