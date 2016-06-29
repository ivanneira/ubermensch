exports.juego = function(a){

    if(/^[Dd]ios/.test(message.text)){

        var randomAnswer = Math.floor((Math.random() * 3) + 1)
        var responseString = "No";

        switch(randomAnswer){
            case 1:
                    responseString = "No"
                break
                
            case 2:
                    responseString = "Si"
                break
            case 3:
                    responseString = "Tal vez"
              break
              
            default:
                    responseString = "No"
        }

        api.sendMessage({
            chat_id: message.chat.id,
            text: "* La respuesta es... " + responseString + "*",
            parse_mode:"Markdown",
            reply_to_message_id: message.message_id
        })

    }
}