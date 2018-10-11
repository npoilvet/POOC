const express = require('express');

const app = express();

const port = 3000;

const Gpio = require('onoff').Gpio;
const sleep = require('sleep');
const led = new Gpio(4, 'out');


const os = require("os");
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))
app.get('/', (request, response) => {
  response.render('index');
})

app.get('/hello/:name', (request, response) => {
  response.render('hello', {name: request.params.name});
})
app.get('/pooc', (request, response) => {
  response.render('pooc');
})

app.get('/on', (request, response) => {
led.writeSync(1)
response.render('on')
})

app.get('/off',(request, response) => {
led.writeSync(0)
response.render('off')
})


app.listen(port, (err) => {
  if (err) {
    return console.log('Erreur du serveur : ', err)
  }

  console.log('Le serveur écoute sur le port '+port+'\nRendez vous sur http://'+os.hostname()+'.local:'+port);
})

process.on('SIGINT', () => {
  led.unexport();
});
