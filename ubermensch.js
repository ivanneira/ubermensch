//ubermensch

var TelegramBot = require('telegram-bot-api');

var api = new TelegramBot({
        token: '[TOKEN HERE]',
        updates: {
            enabled: true,
            get_interval: 200
    }
})

//manejo de la web
var express = require('express')
var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000)

app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html')
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})

//variables de express

//REQUIRE juego si no y tal vez.
const siNoTalVez = require('./ubermensch_sinotalvez.js')

//REQUIRE reenvío de documentos
const reenvioDeMensajes = require('./ubermensch_reenviodemensajes.js')
const usuarios = require('./ubermensch_usuarios.js')

//REQUIRE juego random
const random = require('./ubermensch_random.js')

//evento de llegada de mensaje de telegram
api.on('message',function(message){

//juego si no y tal vez.
	siNoTalVez.juego(api,message)

//reenvío de documentos
	reenvioDeMensajes.reenvio(api,message,usuarios.usuarios)

//juego random
	random.randomMessage(api,message)

	//console.log(message)

})

