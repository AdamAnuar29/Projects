const express = require("express")
const router = express.Router()
var db = require("../lib_database")
var md5 = require("md5")

// ---  CRUD for conference_room
// get all conference_room
router.get("/", (req, res, next) => {
  var sql = "select * from conference_room"
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

// a single conference_room
router.get("/:id", (req, res, next) => {
  var sql = "select * from conference_room where conf_room_id = ?"
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

// Add conference_room
router.post("/conference_room/:id", (req, res, next) => {
  var errors=[]
  if (!req.params.id){
    errors.push("No email specified");
  }
  if (!req.body.full_name){
    errors.push("No name specified");
  }
  if (!req.body.password){
      errors.push("No password specified");
  }

  var data = {
      conf_room_id: req.params.id,
      full_name: req.body.full_name,
      constituency_id: req.body.library_id,
      election_id: req.body.election_id
  }
  var sql ='INSERT INTO conference_room (conf_room_id, full_name, DOB, password, UVC, constituency_id, election_id) VALUES (?,?,?,?,?,?,?)'
  var params =[data.conf_room_id, data.full_name, data.DOB, data.password, data.UVC, data.constituency_id, data.election_id]
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

// Update conference_room
router.patch("/conference_room/:id", (req, res, next) => {
  var data = {
      name: req.body.full_name,
      election_id: req.body.library_id    
  }
  db.run(
      `UPDATE conference_room set 
         name = COALESCE(?,full_name), 
         library_id =  library_id(?, library_id)
         WHERE id = ?`,
         [data.full_name, data.library_id],
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

// delete a conference_room
router.delete("/conference_room/:id", (req, res, next) => {
  db.run(
      'DELETE FROM conference_room WHERE id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})
// ---  CRUD for conference_room


module.exports = router
