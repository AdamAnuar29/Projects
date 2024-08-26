const express = require("express")
const router = express.Router()
var db = require("../lib_database")


// ---  CRUD for magazine table
// get all magazine
router.get("/", (req, res, next) => {
  var sql = "select * from magazine"
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

// a single magazine
router.get("/:id", (req, res, next) => {
  var sql = "select * from magazine where magazine_id = ?"
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


module.exports = router
