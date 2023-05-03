//client er den variabel der bruges til at oprette forbindelse til mqtt serveren
let client 

let currentGame = '#frontpage'
let closedPage;
//setup er den funktion der kører, før selve web-appen starter 
function setup() {
  
  //forsøg at oprette forbindelse til MQTT serveren 
  client = mqtt.connect('ws://mqtt.nextservices.dk')

  //hvis forbindelsen lykkes kaldes denne funktion
  client.on('connect', (m) => {
    console.log('Client connected: ', m)
  })
  
  //subscribe poå emnet programmering
  client.subscribe('boardstation')
  
  //når vi modtager beskeder fra MQTT serveren kaldes denne funktion
  client.on('message', (topic, message) => {
    console.log('Received Message: ' + message.toString())
    console.log('On Topic: ' + topic)

    //Skak
    if(message.toString() == 'skak'){
      select(currentGame).removeClass('show')
      currentGame = '#skak'
      select('#skak').addClass('show')
    }
    //Ludo
    if(message.toString() == 'ludo'){
      select(currentGame).removeClass('show')
      currentGame = '#ludo'
      select('#ludo').addClass('show')
    }
    //Backgammon
    if(message.toString() == 'backgammon'){
      select(currentGame).removeClass('show')
      currentGame = '#backgammon'
      select('#backgammon').addClass('show')
    }
    //Partners
    if(message.toString() == 'partners'){
      select(currentGame).removeClass('show')
      currentGame = '#partners'
      select('#partners').addClass('show')
    }
    if(message.toString() == 'closedpage'){
      select(currentGame).removeClass('show')
      currentGame = '#closedpage'
      select('#closedpage').addClass('show')
    }
  })  
}











