const express = require("express")
const router = express.Router()
var db = require("../lib_database")
var md5 = require("md5")

// ---  CRUD for book
// get all book
router.get("/", (req, res, next) => {
  var sql = "select * from book"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

// a single book
router.get("/:book_id", (req, res, next) => {
  var sql = "select * from book where book_id = ?"
  var params = [req.params.book_id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
});

// Add book
router.post("/", (req, res, next) => {
  var errors=[]
  if (!req.body.email){
    errors.push("No email specified");
}
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.email){
      errors.push("No email specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      email: req.body.email,
      password : md5(req.body.password)
  }
  var sql ='INSERT INTO book (email, password) VALUES (?,?)'
  var params =[data.email, data.password]
  db.run(sql, params, function (err, result) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      res.json({
          "message": "success",
          "data": data,
          "id" : this.lastID
      })
  });
})

// Update book
router.patch("/:id", (req, res, next) => {
  var data = {
      email: req.body.email,
      password : req.body.password ? md5(req.body.password) : null
  }
  db.run(
      `UPDATE book set 
         email = COALESCE(?,email), 
         password = COALESCE(?,password) 
         WHERE id = ?`,
      [data.email, data.password, req.params.id],
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "success",
              data: data,
              changes: this.changes
          })
  });
})

// delete a book
router.delete("/:id", (req, res, next) => {
  db.run(
      'DELETE FROM book WHERE id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})
// ---  CRUD for book

module.exports = router
