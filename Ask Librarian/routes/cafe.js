const express = require("express")
const router = express.Router()
var db = require("../lib_database")
var md5 = require("md5")

// ---  CRUD for cafe
// get all cafe
router.get("/", (req, res, next) => {
  var sql = "select * from cafe"
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

// a single cafe
router.get("/:id", (req, res, next) => {
  var sql = "select * from cafe where cafe_id = ?"
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

// Add cafe
router.post("/cafe/:id", (req, res, next) => {
  var errors=[]
  if (!req.params.id){
    errors.push("No email specified");
  }

  var data = {
      cafe_id: req.params.id,
      full_name: req.body.full_name,
      DOB: req.body.DOB,
      password : md5(req.body.password),
      UVC: req.body.UVC,
      constituency_id: req.body.constituency_id,
      election_id: req.body.election_id
  }
  var sql ='INSERT INTO cafe (cafe_id, full_name, DOB, password, UVC, constituency_id, election_id) VALUES (?,?,?,?,?,?,?)'
  var params =[data.cafe_id, data.full_name, data.DOB, data.password, data.UVC, data.constituency_id, data.election_id]
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

// Update cafe
router.patch("/cafe/:id", (req, res, next) => {
  var data = {
      name: req.body.full_name,
      email: req.body.DOB,
      password : req.body.password ? md5(req.body.password) : null,
      UVC: req.body.UVC,
      constituency_id: req.body.constituency_id,
      election_id: req.body.election_id    
  }
  db.run(
      `UPDATE cafe set 
         name = COALESCE(?,full_name), 
         email = COALESCE(?,DOB), 
         password = COALESCE(?,password),
         UVC =  COALESCE(?,UVC),
         constituency_id = COALESCE(?,constituency_id),
         eletcion_id =  election_id(?,UVC)
         WHERE id = ?`,
         [data.full_name, data.DOB, data.password, data.UVC, data.constituency_id, data.election_id],
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

// delete a cafe
router.delete("/cafe/:id", (req, res, next) => {
  db.run(
      'DELETE FROM cafe WHERE id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})
// ---  CRUD for cafe

module.exports = router
