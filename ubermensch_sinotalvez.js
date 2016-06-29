exports.juego = function(api,message){

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

        respuesta = "* La respuesta es... " + responseString + "*"

        var enviar = require('./ubermensch_enviarmensaje.js')

        enviar.envioDeMensaje(api,message.chat.id, respuesta, message.message_id)
    }
}