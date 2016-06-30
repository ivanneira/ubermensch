//ubermensch

var TelegramBot = require('telegram-bot-api');

var api = new TelegramBot({
    token: '[TOKEN HERE]',
    updates: {
        enabled: true,
        get_interval: 200
    }
})

//manejo de la web------------------
var express = require('express')
var app = require('express')()
var server = require('http').Server(app)
//socket.io
var io = require('socket.io')(server)

//puerto del servidor
server.listen(3000)

//direccionamiento estático
app.use(express.static('public'))

//index
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html')
})

//REQUIRE juego si no y tal vez.
const siNoTalVez = require('./ubermensch_sinotalvez.js')

//REQUIRE reenvío de documentos
const reenvioDeMensajes = require('./ubermensch_reenviodemensajes.js')
const usuarios = require('./ubermensch_usuarios.js')

//REQUIRE juego random
const random = require('./ubermensch_random.js')

//evento de llegada de mensaje de telegram***************************
api.on('message',function(message){

//juego si no y tal vez.
	siNoTalVez.juego(api,message)

//reenvío de documentos
	reenvioDeMensajes.reenvio(api,message,usuarios.usuarios)

//juego random
	random.randomMessage(api,message)

	//console.log(message)

	streamMessage(message)
})

//EVENTOS de socket.io
io.on('connect', function () {  
})

//funcion que emite el mensaje
function streamMessage(message){

	io.emit('message', message)
}