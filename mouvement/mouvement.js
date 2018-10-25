const Gpio = require('onoff').Gpio;
const sleep = require ('sleep');
const led = new Gpio (24, 'out');
const buzzer = new Gpio (22, 'out');
var sensor = new Gpio(17, 'in', 'both');
function exit() {
	sensor.unexport();
	process.exit();
}
sensor.watch(function (err, value) {
	if(err) exit();
if(value == 1) {
		console.log('Mouvement détecté !');
		led.writeSync(1);
		buzzer.writeSync(1);
		sleep.sleep(1);
		buzzer.writeSync(0);
	} else {
		console.log('fin du mouvement');
		led.writeSync(0);
	}
});

