const express = require("express")
const router = express.Router()


router.post("/startElection", (req, res) => {
  // console.log("User Election Commission")

  // TODO
  // 1. get update election status to the database

  // 2. send the result back in JSON format for front to display in the dashboard
  // example

  res.json({"status":200, "Message": "Election Start"})
})

router.post("/stopElection", (req, res) => {
  // console.log("User Election Commission")

  // TODO
  // 1. update election status to database

  // 2. send the result back in JSON format for front to display in the dashboard
  // example

  res.json({"status":200, "Message": "Election Stop"})
})

// election commision current status for monitoring
router.get("/monitor", (req, res) => {
  // console.log("User Election Commission")

  // TODO
  // 1. get result from the database

  // 2. send the result back in JSON format for front to display in the dashboard
  // example
  const results = {"Shangri-la-Town" : [
    {"party": "Blue Party", "Voting count": 10}, 
    {"party": "Red Party", "Voting count": 20}, 
    {"party": "Yellow Party", "Voting count": 40},
    {"party": "Independance Party", "Voting count": 100}
    ],
   "Northern-Kunlun-Mountain": [
    {"party": "Blue Party", "Voting count": 10}, 
    {"party": "Red Party", "Voting count": 10}, 
    {"party": "Yellow Party", "Voting count": 20},
    {"party": "Independance Party", "Voting count": 10}
    ],
   "Western-Shangri-la": [
    {"party": "Blue Party", "Voting count": 10}, 
    {"party": "Red Party", "Voting count": 10}, 
    {"party": "Yellow Party", "Voting count": 30},
    {"party": "Independance Party1", "Voting count": 10},
    {"party": "Independance1 Party2", "Voting count": 10},
    ],
   "Naboo-Vallery": [
    {"party": "Blue Party", "Voting count": 10}, 
    {"party": "Red Party", "Voting count": 50}, 
    {"party": "Yellow Party", "Voting count": 10},
    {"party": "Independance Party", "Voting count": 10}
    ],
   "New-Felucia": [
    {"party": "Blue Party", "Voting count": 10}, 
    {"party": "Red Party", "Voting count": 30}, 
    {"party": "Yellow Party", "Voting count": 100},
    {"party": "Independance Party", "Voting count": 10}
    ] }

  res.json(results)
})

router.get("/results", (req, res) => {
  // console.log("User Election Commission")

  // TODO
  // 1. get result from the database

  // 2. send the result back in JSON format for front to display in the dashboard
  // example
  const results = {};

  res.json(results)
})



module.exports = router
