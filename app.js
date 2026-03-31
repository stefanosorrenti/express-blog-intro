	
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
const posts = [ 


    {
        titolo: 'Tokyo',
        contenuto: 'La bellissima Tokyo',
        image: './public/imgs/tokyo.jpg',
        tags: ['metropoli', 'giappone', 'asia']
    },

    {
        titolo: 'Roma',
        contenuto: 'La bellissima Roma',
        image: './public/imgs/roma.jpg',
        tags: ['metropoli', 'italia', 'europa']
    },

    {
        titolo: 'New York',
        contenuto: 'La bellissima New York',
        image: './public/imgs/new-york.jpg',
        tags: ['metropoli', 'usa', 'america']
    },

    {
        titolo: 'Cerignola',
        contenuto: 'La bruttissima Cerigola',
        image: './public/imgs/cerignola.jpg',
        tags: ['città', 'italia', 'europa']
    },

    {
        titolo: 'Città del capo',
        contenuto: 'La bellissima Città del capo',
        image: './public/imgs/citta-del-capo.jpg',
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