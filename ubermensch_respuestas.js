exports.juego = function(api,message){

    //en caso de que una frase comienze con "dios"
    if(/^dios,? ¿?.*\??/i.test(message.text)){

        var randomAnswer = Math.floor(Math.random() * 3)
   	var responseString = ""
        var enviar = require('./ubermensch_enviarmensaje.js')

        switch(randomAnswer){
		case 0:
			responseString = "de eso no hay nada escrito."
			break
		case 1:
			responseString = "sí."
			break
		case 2:
			responseString = "tal vez."
			break
		case 3:
			responseString = "mis ángeles dicen que no."
			break
		case 4:
			responseString = "puede ser, puede ser. Todo puede ser."
			break
		case 5:
			responseString = "ni Dios lo sabe."
			break
		case 6:
			responseString = "intentes preguntar de nuevo, pero con rima."
			break
		default:
			responseString = "No."
        }

        respuesta = "Las antiguas Escrituras dicen que *" + responseString + "*"

        enviar.envioDeMensaje(api, message.chat.id, respuesta, message.message_id)
    }
}
