const express = require("express")
const router = express.Router()
var db = require("../lib_database")


// ---  CRUD for workstation table
// get all workstation
router.get("/", (req, res, next) => {
  var sql = "select * from workstation"
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

// a single workstation
router.get("/:id", (req, res, next) => {
  var sql = "select * from workstation where workstation_id = ?"
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
