exports.randomMessage = function(api, message) {
	var reenviodemensajes = require('./ubermensch_reenviodemensajes.js')

	var patt = /(!*)random/i

	// Enviamos tantos mensajes como ! hay al principio.
	if (patt.test(message.text)) {
		var iterations = message.text.match(patt)[1].length
		if (iterations > 5) {
			iterations = 5
		}
		for (i = 0; i < iterations; i++) {
			var randomNumber = Math.floor((Math.random() * message.message_id));
			reenviodemensajes.reenvioAChat(api, message, randomNumber)
		}
	}
}
