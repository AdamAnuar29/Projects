const express = require("express")
const router = express.Router()
var db = require("../lib_database")
var md5 = require("md5")

// ---  CRUD for discussion area
// get all discussion area
router.get("/", (req, res, next) => {
  var sql = "select * from discussion_area"
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

// a single discussion_area
router.get("/:discussion_area_id", (req, res, next) => {
  var sql = "select * from discussion_area where discussion_area_id = ?"
  var params = [req.params.discussion_area_id]
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

// Add discussion_area
router.post("/discussion_area/:discussion_area_id", (req, res, next) => {
  var errors=[]
  if (!req.params.discussion_area_id){
    errors.push("No email specified");
  }

  var data = {
      discussion_area_id: req.params.discussion_area_id,
  }
  var sql ='INSERT INTO discussion_area (discussion_area_id, occupancy, password, library_id) VALUES (?,?,?,?,?,?,?)'
  var params =[data.discussion_area_id, data.ocupancy, data.library_id]
  db.run(sql, params, function (err, result) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      res.json({
          "message": "success",
          "data": data,
          "discussion_area_id" : this.lastID
      })
  });
})

// Update discussion_area
router.patch("/discussion_area/:discussion_area_id", (req, res, next) => {
  var data = {
      name: req.body.full_name,
      library_id: req.body.library_id    
  }
  db.run(
      `UPDATE discussion_area set 
         occupancy = COALESCE(?, occupancy), 
         WHERE discussion_area_id = ?`,
         [data.ocupancy, data.library_id],
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

// delete a discussion_area
router.delete("/discussion_area/:discussion_area_id", (req, res, next) => {
  db.run(
      'DELETE FROM discussion_area WHERE discussion_area_id = ?',
      req.params.discussion_area_id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})
// ---  CRUD for discussion area

module.exports = router
