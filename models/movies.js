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
























//movies
"use strict"
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/data.db');


class Contacts{
  static findAll(){
    let query = `SELECT * FROM Contacts`;
    return new Promise((resolve,reject)=>{
      db.all(query,(err,contactsRows)=>{
        if(!err){
          resolve(contactsRows)
        }else{
          reject(err)
        }
      })
    })
  }
  static create(obj){
    let query = `INSERT INTO Contacts (name,company,telp_number,email)
                 VALUES("${obj.name}", "${obj.company}", "${obj.telp_number}", "${obj.email}")`;
    return new Promise((resolve,reject)=>{
      db.all(query,(err,contactsRows)=>{
        if(!err){
          resolve(contactsRows)
        }else{
          reject(err)
        }
      })
    })
  }

  static delete(id){
    let query = `DELETE FROM Contacts
                 WHERE id = ${id}`;
    return new Promise((resolve,reject)=>{
      db.all(query,(err,contactsRows)=>{
        if(!err){
          resolve(contactsRows)
        }else{
          reject(err)
        }
      })
    })
  }
