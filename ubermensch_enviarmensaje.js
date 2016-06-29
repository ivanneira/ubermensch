exports.envioDeMensaje = function (api,chat_id,texto,message_id){

     api.sendMessage({
        chat_id: chat_id,
        text: texto,
        parse_mode:"Markdown",
        reply_to_message_id: message_id
    })
}