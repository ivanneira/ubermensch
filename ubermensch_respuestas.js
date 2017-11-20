exports.juego = function(api,message){

	// En caso de que una frase comienze con "Dios"
	if(/^dios,? ¬ø?.*\??/i.test(message.text)) {
		var enviar = require('./ubermensch_enviarmensaje.js')
		
		var leftSides = [
			"Las antiguas Escrituras dicen que",
			"Mis √°ngeles dicen que",
			"Est√° escrito qu"
		]

		var rightSides = [
			"s√",
			"tal vez",
			"no",
			"intentes preguntar de nuevo, pero con rima",
			"absolutamente",
			"sipirir√"
		]

		var leftSide = leftSides[Math.floor(Math.random() * leftSides.length)];
		var rightSide = rightSides[Math.floor(Math.random() * rightSides.length)];

		var responseString = leftSide + " *" + rightSide + "*."

		enviar.envioDeMensaje(api, message.chat.id, responseString, message.message_id)
	}
}
