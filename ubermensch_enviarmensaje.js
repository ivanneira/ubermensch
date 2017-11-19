exports.envioDeMensaje = function(api, chat_id, texto, message_id) {
	api.sendMessage({
		chat_id: chat_id,
		text: texto,
		parse_mode:"Markdown",
		reply_to_message_id: message_id
	})
}

exports.reEnvioDeMensaje = function(api, chat_id, from_chat_id, message_id) {
	api.forwardMessage({
		chat_id: chat_id,
		from_chat_id: from_chat_id,
		message_id: message_id
	})
}
