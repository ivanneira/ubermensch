//reenvío a privado
exports.reenvio = function(api,message,usuarios){

	var enviar = require('./ubermensch_enviarmensaje.js')

	//condicion: si el mensaje tiene contenido multimedia
	if(typeof(message.photo)!= 'undefined' || typeof(message.document )!= 'undefined' || typeof(message.caption)!= 'undefined' || typeof(message.video)!= 'undefined'){

		//envío al administrador
		if(usuarios.reenvio.administrador){

			enviar.reEnvioDeMensaje(api,usuarios.administrador,message.chat.id,message.message_id)
		}

		//envío a usuarios
		if((typeof(usuarios.usuarios)!= 'undefined')&&(usuarios.reenvio.usuarios)){

			for(var k in usuarios.usuarios){

				enviar.reEnvioDeMensaje(api,usuarios.usuarios[k],message.chat.id,message.message_id)
			}
		}
	}
}

exports.reenvioAChat = function(api,message,randomNumber){
	console.log(message.chat.id)
	console.log(randomNumber)
    api.forwardMessage({
        chat_id: message.chat.id,
        from_chat_id: message.chat.id,
        message_id: randomNumber
    });
}
