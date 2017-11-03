const sqlite3 = require('sqlite3').verbose(0);
const db = new sqlite3.Database('./db/movie.db');

const Movie = require()

class Movies {
    static update(id) {
        let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`;
        return new Promise((resolve, reject)=> {
            db.all(query, )
        })
    }
}