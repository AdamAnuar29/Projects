const express = require("express")
const router = express.Router()
var db = require("../lib_database")


// ---  CRUD for student table
// get all students data
// Example: http:/localhost:3000/lib/student
router.get("/", (req, res, next) => {
  var sql = "select * from student"
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

// a single student data with id
// Example: http://localhost:3000/lib/student/1
router.get("/:student_id", (req, res, next) => {
  var sql = "select * from student where student_id = ?"
  var params = [req.params.student_id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }

      if (row == null) {
        res.json({
            "message":"Error: Cannot found " + req.params.student_id
        })
        return;
      }

      res.json({
          "message":"success",
          "data":row
       })
    });
});

// Add student
router.post("/", (req, res, next) => {
  var errors=[]
  if (!req.body.student_id){
      errors.push("No student specified");
  }
  if (!req.body.used){
    errors.push("No student used status specified");
}
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      student_id: req.body.student_id,
      email: req.body.email ,
      password: req.body.password,            
      degree_level: req.body.degree_level,
      gender: req.body.gender,
      nationality: req.body.nationality
  }
  var sql ='INSERT INTO student (student_id, email, password, degree_level, gender, nationality) VALUES (?,?)'
  var params =[data.student_id, data.email, data.password, data.degree_level, data.gender, data.nationality]
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

// Update student
router.put("/:student_id", (req, res, next) => {
  var data = {
    student_id: req.body.student_id,
    email: req.body.email ,
    password: req.body.password,            
    degree_level: req.body.degree_level,
    gender: req.body.gender,
    nationality: req.body.nationality
}
 
  db.run(
      `UPDATE student set 
         used = COALESCE(?,used)
         WHERE student_id = ?`,
      [data.email, data.password, data.degree_level, data.gender, data.nationality, req.params.student_id],
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

// delete a student
router.delete("/:student_id", (req, res, next) => {
  db.run(
      'DELETE FROM student WHERE student_id= ?',
      req.params.student_id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", changes: this.changes})
  });
})
// ---  CRUD for student table

module.exports = router
