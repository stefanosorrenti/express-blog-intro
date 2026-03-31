	
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
const posts = [ 


    {
        titolo: 'Tokyo',
        contenuto: 'La bellissima Tokyo',
        image: 'https://media.istockphoto.com/id/1390815938/it/foto/tokyo-citt%C3%A0-in-giappone.webp?s=2048x2048&w=is&k=20&c=sJJhD7iJA9r90gLPNTnI2X0KDtH9p9SenQ_PhTw_QLE=',
        tags: ['metropoli', 'giappone', 'asia']
    },

    {
        titolo: 'Roma',
        contenuto: 'La bellissima Roma',
        image: 'https://media.istockphoto.com/id/1382341359/it/foto/roma-italia-vista-verso-il-colosseo.webp?s=612x612&w=is&k=20&c=JMiBbmNx68vWzHMKzrIAACrIIBQRIghWCPgkqBi3U_8=',
        tags: ['metropoli', 'italia', 'europa']
    },

    {
        titolo: 'New York',
        contenuto: 'La bellissima New York',
        image: 'https://media.istockphoto.com/id/2156176090/it/foto/times-square-a-new-york-city.jpg?s=612x612&w=is&k=20&c=gpAWOin7SAR-_WjjjdYw0i6FpWv0tvwp1j_zY9FkFMQ=',
        tags: ['metropoli', 'usa', 'america']
    },

    {
        titolo: 'Cerignola',
        contenuto: 'La bruttissima Cerigola',
        image: 'https://media.istockphoto.com/id/176708877/it/foto/duomo-di-cerignola-puglia-italia.jpg?s=612x612&w=0&k=20&c=UMh2l09Ng7m-A7l7tj84tYZj5VKkcBUadjcFOZ3WEY0=',
        tags: ['città', 'italia', 'europa']
    },

    {
        titolo: 'Città del capo',
        contenuto: 'La bellissima Città del capo',
        image: 'https://media.istockphoto.com/id/1482209083/it/foto/panoramica-aerea-della-citt%C3%A0-di-addis-abeba-la-capitale-delletiopia-che-mostra-edifici-e.jpg?s=612x612&w=is&k=20&c=CbRDHz3zHOSPnxo66XyLGsxyA0Zo2pTXvcr981-Rpzg=',
        tags:['metropoli', 'sudafrica', 'africa']
    },
] 	




app.get('/', (req, res) => {
	
  res.send('Server del mio Blog!')
	
});

app.get('/bacheca', (req, res) => {
    res.json({posts})
    
})

app.listen(port, () => {
	
  console.log(`Example app listening on port ${port}`)
	
}) 