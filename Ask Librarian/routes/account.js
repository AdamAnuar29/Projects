const express = require("express")
const router = express.Router()
var db = require("../lib_database")

// ---  CRUD for account table
// get all account
router.get("/", (req, res, next) => {
  var sql = "select * from account"
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

// a single account
router.get("/:id", (req, res, next) => {
  var sql = "select * from account where account_id = ?"
  var params = [req.params.id]
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

// Add account
router.post("/", (req, res, next) => {
  var errors=[]
  if (!req.body.student_id){
      errors.push("No student id specified");
  }
  var errors=[]
  if (!req.body.account){
      errors.push("No account specified");
  }
  var errors=[]
  if (!req.body.library_id){
      errors.push("No library id specified");
  }
  var errors=[]
  if (!req.body.borrow_book){
      errors.push("No borrow book specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      account: req.body.account,
      student_id: req.body.student_id,
      library_id: req.body.library_id,
      borrow_book: req.body.borrow_book
  }
  var sql ='INSERT INTO account (account, student_id, library_id, borrow_book, borrow_journal, book_room) VALUES (?,?,?,?)'
  var params =[data.account, data.student_id,data.library_id, data.borrow_book, data.borrow_journal, data.book_room]
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

// Update account
router.put("/:account_id", (req, res, next) => {
  console.log ("account patch method\n")
  var data = {
    account: req.body.account,
    student_id: req.body.student_id,
    library_id: req.body.librray_id,
    borrow_book: req.body.borrow_book,
    borrow_journal: req.body.borrow_journal,
    borrow_room: req.body.borrow_room 
  }
  db.run(
      `UPDATE account set 
         account = COALESCE(?,account),
         student_id = COALESCE(?,student_id),
         library_id = COALESCE(?,library_id),
         borrow_book = COALESCE(?,borrow_book) 
         WHERE account_id = ?`,
      [data.student_id, data.library_id, data.borrow_book, data.borrow_journal, data.borrow_room, req.params.account_id],
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

// delete a account
router.delete("/:account_id", (req, res, next) => {
  db.run(
      'DELETE FROM account WHERE account_id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})

// get all account by library
  router.get("/:account_id", (req, res, next) => {
    var sql = "select * from account where account_id = ?"
    var params = [req.params.account_id]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success get student account",
            "data":rows
        })
      });
  });


// ---  CRUD for account table

module.exports = router
