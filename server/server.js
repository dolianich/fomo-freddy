const express = require('express')
const memes = require('./data/memes')

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/memes', (req, res) => {
    res.json(memes)
})

app.get('/api/memes/:id', (req, res) => {
    const meme = memes.find((m) => m.id === req.params.id)
    res.json(meme)
})

app.listen(4000, console.log('Server is running on port 4000'))