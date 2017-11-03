const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../movie_1/db');

const movie = require('..models/movies')

class Movie {
    static findAll() {
        let query = `select * from Movies`
        return new Promise ((resolve, reject)=> {
            db.all(query, (err,dataMovies)=> {
                if(!err) {
                    console.log(dataMovies)
                } else {
                    console.log(err)
                }
            })
        })
    }

    static create (obj) {
        let query = `insert into movies values (city)`
        return new Promise ((resolve, reject)=> {
            db.all(query, (err, dataMovies) => {
                if(!err) {
                    console.log(dataMovies)
                } else {
                    console.log(err)
                }
            })
        })
    }

    static update(obj) {
        let query = `update from Movies
                    id = req.params.id
                    set city = req.body.city`
                    return new Promise((resolve, reject) => {
                        db.all(query, (err, dataMovies) => {
                            if(!err) {
                                console.log(dataMovies) 
                            } else {
                                console.log(err)
                            }
                        })
                    })
                 }
}

module.exports = Movie