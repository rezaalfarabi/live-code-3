//your code here
const express = require('express')
const app = express()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
    res.render('movies')
  })

  app.get('/prodHouses', function (req, res) {
    res.render('prodHouses')
  })

app.listen(3000, function () {
  console.log('test port 3000')
})


