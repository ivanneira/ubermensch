exports.randomMessage = function(api,message){

	var reenviodemensajes = require('./ubermensch_reenviodemensajes.js')

	//en caso de una llamada simple !random
	if(/^![Rr][Aa][Nn][Dd][Oo][Mm]/.test(message.text)){

        var randomNumber = Math.floor((Math.random()* message.message_id ));

        reenviodemensajes.reenvioAChat(api,message,randomNumber)
    }

    //en caso de una llamada doble !!random
    if(/^!![Rr][Aa][Nn][Dd][Oo][Mm]/.test(message.text)){

        var randomNumber = Math.floor((Math.random()* message.message_id ));

        reenviodemensajes.reenvioAChat(api,message,randomNumber)

        randomNumber = Math.floor((Math.random()* message.message_id ));

        reenviodemensajes.reenvioAChat(api,message,randomNumber)
    }
}