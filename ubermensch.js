fs = require('fs');

var TelegramBot = require('telegram-bot-api')

// The token is get from a file with it inside
var api = new TelegramBot({
<<<<<<< HEAD
	token: fs.readFile("http_key"),
	updates: {
		enabled: true,
		get_interval: 200
	}
=======
    token: '[TOKEN HERE]',
    updates: {
        enabled: true,
        get_interval: 200
    }
>>>>>>> a94f2703e5972b8eb0b2eaadfff4ff36b51d4b47
})

// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.

var http = require('http')
var path = require('path')
var async = require('async')
var socketio = require('socket.io')
var express = require('express')

// ## SimpleServer
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.

var router = express()
var server = http.createServer(router)
var io = socketio.listen(server)
io.set('log level', 1)

router.use(express.static(path.resolve(__dirname, 'client')))

// Contador de sockets
var sockets = 0

io.on('connection', function (socket){
	sockets = sockets + 1
  
	socket.on('disconnect', function() {
		sockets = sockets - 1
    
		updateConnected(sockets)
	})
  
	updateConnected(sockets)
})

// Importamos todos los módulos.

const siNoTalVez = require('./ubermensch_sinotalvez.js')
const reenvioDeMensajes = require('./ubermensch_reenviodemensajes.js')
const usuarios = require('./ubermensch_usuarios.js')
const random = require('./ubermensch_random.js')
const ayuda = require('./ubermensch_ayuda.js')

// Registramos el evento que procesa los mensajes
api.on('message', function(message) {
  
	// Loguea mensaje en consola
	var mText = '[no text]'

	if(typeof(message.text) != 'undefined'){
		mText = message.text
		console.log('Grupo: [' + message.chat.title + '] ' + 'Nombre: (' + message.from.first_name + '): ' + mText)
		
		// Preguntas:
		sendToWeb(siNoTalVez.juego(api, message))

		// Reenvío Random:
		reenvioDeMensajes.reenvio(api, message, usuarios.usuarios)
		random.randomMessage(api, message)
	
		// Ayuda
		ayuda.ayuda(api,message)
	}
})

// En caso de que el mensaje sea dirigido a Dios, envía el evento socket
function sendToWeb(responseArray){
	if(typeof(responseArray)!='undefined'){
		io.sockets.emit('pray', responseArray)
	}
}

function updateConnected(connected) {
      io.sockets.emit('connections', connected)
}

// Ponemos al servidor a escuchar por conexiones
server.listen(process.env.PORT || 3000, process.env.IP || "localhost", function(){
  var addr = server.address()
  console.log("Chat server listening at", addr.address + ":" + addr.port)
})
