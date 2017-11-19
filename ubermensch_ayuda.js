exports.ayuda = function(api, message) {

	if ((/\/ayuda de dios(@eltodopoderosobot)?/i.test(message.text))) {
    
        	var responseString = "Para utilizar este bot, tienes que comenzar una pregunta con la palabra *\"Dios\"* y hacer *una pregunta cerrada*, por ejemplo _\"dios, ¿seré millonario?\"_ y Dios responderá."
	
		// TODO: Cuando tenga un servidor para ponerlo
		//responseString += "\nSi quieres *ver en tiempo real* las preguntas a Dios, entrá a http://goo.gl/8F1Cvb"

		api.sendMessage({
			chat_id: message.chat.id,
			text: responseString,
			parse_mode: "Markdown",
		})
	}
}
