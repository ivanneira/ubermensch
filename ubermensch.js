//ubermensch

var TelegramBot = require('telegram-bot-api')

var api = new TelegramBot({
    token: '[TOKEN HERE]',
    updates: {
        enabled: true,
        get_interval: 200
    }
})

//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http')
var path = require('path')

var async = require('async')
var socketio = require('socket.io')
var express = require('express')

//-------------------------------------------------------------------------------------------
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express()
var server = http.createServer(router)
var io = socketio.listen(server)

router.use(express.static(path.resolve(__dirname, 'client')))


//___________________________________________________________________________________

//REQUIRE juego si no y tal vez.
const siNoTalVez = require('./ubermensch_sinotalvez.js')

//REQUIRE reenvío de documentos
const reenvioDeMensajes = require('./ubermensch_reenviodemensajes.js')
const usuarios = require('./ubermensch_usuarios.js')

//REQUIRE juego random
const random = require('./ubermensch_random.js')

//evento de llegada de mensaje de telegram***************************
api.on('message',function(message){
  
  console.log('new telegram message event')

//juego si no y tal vez.
  sendToWeb(siNoTalVez.juego(api,message))

//reenvío de documentos
  reenvioDeMensajes.reenvio(api,message,usuarios.usuarios)

//juego random
  random.randomMessage(api,message)
  
})

//en caso de que el mensaje sea dirigido a dios, envía el evento socket
function sendToWeb(responseArray){
  
  if(typeof(responseArray)!='undefined'){
    
    console.log('sended to client')
    io.sockets.emit('pray', responseArray)
  }

}

//servidor en escucha
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port)
});
