const sensor = require('ds18b20');
const sensorId = '28-01131b7af492';
var temperature = sensor.temperatureSync(sensorId);
console.log('La température est de ' + temperature);

