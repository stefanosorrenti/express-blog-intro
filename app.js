	
const express = require('express')
const app = express()
const port = 3000
const posts = [


    {
        titolo: 'Tokyo',
        contenuto: 'La bellissima Tokyo',
        image: 'src',
        tags: ['metropoli', 'giappone', 'asia']
    },

    {
        titolo: 'Roma',
        contenuto: 'La bellissima Roma',
        image: 'src',
        tags: ['metropoli', 'italia', 'europa']
    },

    {
        titolo: 'New York',
        contenuto: 'La bellissima New York',
        image: 'src',
        tags: ['metropoli', 'usa', 'america']
    },

    {
        titolo: 'Cerignola',
        contenuto: 'La bruttissima Cerigola',
        image: 'src',
        tags: ['città', 'italia', 'europa']
    },

    {
        titolo: 'Città del capo',
        contenuto: 'La bellissima Città del capo',
        image: 'src',
        tags:['metropoli', 'sudafrica', 'africa']
    },
] 	


	
app.get('/', (req, res) => {
	
  res.send('Server del mio Blog!')
	
});


app.listen(port, () => {
	
  console.log(`Example app listening on port ${port}`)
	
})