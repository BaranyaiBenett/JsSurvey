const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express()
const port = 80

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  fs.writeFileSync(__dirname + '/data.txt', req.body.enjoyment_level + "\n",{flag:'a+'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})