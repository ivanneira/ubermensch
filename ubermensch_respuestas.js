exports.juego = function(api,message){

	// En caso de que una frase comienze con "Dios"
	if(/^dios,? ¿?.*\??/i.test(message.text)) {

		var randomAnswer = Math.floor(Math.random() * 6)
		var responseString = ""
		var leftSides = [
			"Las antiguas Escrituras dicen que",
			"Mis ángeles dicen que",
			"Está escrito que"
		]

		var enviar = require('./ubermensch_enviarmensaje.js')

		switch(randomAnswer) {
			case 0:
				rightSide = "sí"
				break
			case 1:
				rightSide = "tal vez"
				break
			case 2:
				rightSide = "mis ángeles dicen que no"
				break
			case 3:
				rightSide = "intentes preguntar de nuevo, pero con rima"
				break
			case 4:
				rightSide = "absolutamente sí"
				break
			default:
				rightSide = "no"
		}

		responseString = leftSide + " *" + rightSide + "*."

		enviar.envioDeMensaje(api, message.chat.id, responseString, message.message_id)
	}
}
