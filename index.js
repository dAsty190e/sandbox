// bring in express.js dependencies
const express = require('express')
// start express.js
const app = express() // () means execute
// set the port to 3000 (localhost:3000)
const port = 3000

var cat = "Basya says MEOOOOOOWWWWWWW";

// create a path '/' and respond with content
app.get('/', (req, res) => res.send('Hello World! yey! ' + cat))
app.get('/test', (req, res) => res.send('a test page'))

// setup a listener and when ready print out a message
app.listen(port, () => console.log(`Example app listening on port ${port}!`))