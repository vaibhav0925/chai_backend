require('dotenv').config()
const express = require('express')
const { Http2ServerRequest } = require('http2')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vaibhavdotcom')
})

app.get('/logIn', (req, res) => {
    res.send('<h1>Please LogIn at code aur chai</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})