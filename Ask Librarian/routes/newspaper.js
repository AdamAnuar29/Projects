const express = require("express")
const router = express.Router()
var db = require("../lib_database")


// ---  CRUD for newspaper table
// get all newspaper
router.get("/", (req, res, next) => {
  var sql = "select * from newspaper"
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

// a single newspaper
router.get("/:id", (req, res, next) => {
  var sql = "select * from newspaper where newspaper_id = ?"
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
