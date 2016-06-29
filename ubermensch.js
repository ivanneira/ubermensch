//ubermensch

var TelegramBot = require('telegram-bot-api');
var colors      = require('colors');

var api = new TelegramBot({
        token: '[token here]',
        updates: {
            enabled: true,
            get_interval: 200
    }
})

//juego si no y tal vez.
const siNoTalVez = require('./ubermensch_sinotalvez.js')

//reenvío de documentos
const reenvioDeMensajes = require('./ubermensch_reenviodemensajes.js')
const usuarios = require('./ubermensch_usuarios.js')

//evento de llegada de mensaje de telegram
api.on('message',function(message){

//juego si no y tal vez.
	siNoTalVez.juego(api,message)

//reenvío de documentos
	//reenvioDeMensajes.reenvío(usuarios)

	console.log(message)

})