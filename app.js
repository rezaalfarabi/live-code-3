//your code here
const express = require('express')
const app = express()
const movie = require('../models/')

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
  movie.findAll().then((getData)=> {
  
  })
    res.render('movies')
  })


app.get('/contacts/edit/:id',function(req,res){
  let isEdit = true;
  let id = req.params.id;
  Contact.update(id).then((dataMovies)=>{
    res.render('contacts',{dataMOvies, isEdit})
  }).catch((err)=>{
    console.log(err)
  })
})

  app.get('/prodHouses', function (req, res) {
    res.render('prodHouses')
  })

app.listen(3000, function () {
  console.log('test port 3000')
})


