var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "lib_db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
    }
});

module.exports = db

// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
