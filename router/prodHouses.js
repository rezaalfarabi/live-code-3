//contact js router
const express = require('express');
const router = express.Router();

const ProdHouse = require('../models/')

  router.get('/movies', function(req,res) {
    let query = `SELECT M.*, P.name_prodHouse
                 FROM Movies AS M
                 LEFT JOIN ProductionHouses AS P
                 ON P.id = M.prodHouseId`
  
    db.all(query, function(err,rowsMovie) {
      if(!err) {
        res.render('movie', {dataMovie: rowsMovie});
      } else {
        res.send(err)
      }
    })
  })
  
  router.get('/movies/edit/:id', function(req,res) {
    let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`;
    let queryProdHouse = `SELECT * FROM ProductionHouses`
  
    db.all(query, function(errMovies,movie) {
      if(!errMovies) {
        if(movie.length > 0) {
          db.all(queryProdHouse, function(errProdHouse,rowsProdHouse) {
            if(!errProdHouse) {
              res.render('editMovie', {movie: movie[0], dataProdHouse: rowsProdHouse})
            } else {
              res.send(errProdHouse)
            }
          })
        }
      } else {
        res.send(errMovies)
      }
    })
  })
  
  router.post('/movies/edit/:id', function(req,res) {
    let query = `UPDATE Movies
                 SET name = '${req.body.movie}',
                   released_year = '${req.body.released_year}',
                   genre = '${req.body.genre}',
                   prodHouseId = ${req.body.prodHouseId}
                 WHERE id = ${req.params.id}`
    db.run(query, function(err) {
      if(!err) {
        res.redirect('/movies');
      } else {
        res.send(err)
      }
    })
  })
  
  router.get('/prodHouses', function(req,res){
    let query = `SELECT * FROM ProductionHouses`
  
    db.all(query, function(err,rowsProdHouse) {
      if(!err) {
        res.render('prodHouse', {dataProdHouse: rowsProdHouse});
      } else {
        res.send(err)
      }
    })
  })

  module.exports = router