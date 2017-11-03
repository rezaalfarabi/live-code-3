const sqlite3 = require('sqlite3').verbose(0);
const db = new sqlite3.Database('./db/movie.db');

const Movie = require()

class Movies {
    static update(obj){
        let query = `UPDATE Movies
                   SET city = "${obj.city}",
                   WHERE id = "${obj.id}"`;
       return new Promise((resolve,reject)=>{
         db.all(query,(err,dataMovie)=>{
           if(!err){
             resolve(dataMovie)
           }else{
             reject(err)
           }
         })
       })
      }


    }

    module.exports = Movies
