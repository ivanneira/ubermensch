exports.juego = function(api,message){

    //en caso de que una frase comienze con "dios"
    if(/^[Dd][Ii][Oo][Ss][ ,]/.test(message.text)){

        var randomAnswer = Math.floor((Math.random() * 3) + 1)
        var responseString = "No"
        var enviar = require('./ubermensch_enviarmensaje.js')

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

        var respuesta = "* La respuesta es... " + responseString + "*"

        enviar.envioDeMensaje(api,message.chat.id, respuesta, message.message_id)
        
        return [message, responseString]
    }
}