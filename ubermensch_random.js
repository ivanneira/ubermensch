exports.randomMessage = function(api, message) {
	var reenviodemensajes = require('./ubermensch_reenviodemensajes.js')

	var patt = "/(!*)random/i"

	// Enviamos tantos mensajes como ! hay al principio.
	if (patt.test(message.text)) {
		for (i = 0; i < message.text.match(patt)[1].length); i++) {
			var randomNumber = Math.floor((Math.random * message.message_id));
			reenviodemensajes.reenvioAChat(api, message, randomNumber)
		}
	}
}
