exports.reenvio = function(usuarios){

	if(typeof(message.photo)!= 'undefined' || typeof(message.document )!= 'undefined' || typeof(message.caption)!= 'undefined' || typeof(message.video)!= 'undefined'){

		if(usuarios.reenvio.administrador){

			api.forwardMessage({
	            chat_id: usuarios.administrador,
	            from_chat_id: message.chat.id,
	            message_id: message.message_id
	        })
		}

		if((typeof(usuarios.usuarios)!= 'undefined')&&(usuarios.reenvio.usuarios)){

			

			for(var k in usuarios.usuarios){



				api.forwardMessage({
		            chat_id: usuarios.usuarios[k].user_id,
		            from_chat_id: message.chat.id,
		            message_id: message.message_id
		        })
			}
		}
	}
}

