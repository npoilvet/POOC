const sensor = require('ds18b20');
const sensorId = '28-01131b7af492';
var temperature = sensor.temperatureSync(sensorId);
var message = '';
const express = require('express')
const app = express()
const port = 3000
const os = require("os");
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/index', (request, response) => {
if (temperature < 15){message = "il fait pas chaud chaud"}
else if (temperature > 15 && temperature < 30){message = "il fait bon"}
else if (temperature > 30){message = "sors les merguez le sol chauffe"} 
response.render('index', {temperature: temperature, message: message});
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Erreur du serveur : ', err)
  }
console.log('Le serveur écoute sur le port '+port+'\nRendez vous sur http://'+os.hostname()+'.local:'+port);
})
