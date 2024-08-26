const express = require("express")
const router = express.Router()

// API for public to get the election results

//1. GET /gevs/constituency/<constituency>
// Respond
// {"constituency":"northern-kunlun-mountain",
// "result": [
//     {
//     "name":"candidate 1",
//     "party":"Red Party",
//     "vote":"4"
//     },
//     { "name":"candidate 2",
//     "party":"Blue Party",
//     "vote":"2"
//     },    ,
//     { "name":"candidate 3",
//     "party":"Yellow Party",
//     "vote":"1"
//     }
//   ]
// }

//2. GET /gevs/results
// {
//     "status": "Completed",
//     "winner": "Red Party",
//     "seats": [
//         {
//         "party": "Red Party",
//         "seat": "3"
//         },
//         {
//         "party": "Blue Party",
//         "seat": "1"
//         },
//         {
//         "party": "Yellow Party",
//         "seat": "1"
//         },
//         {
//         "party": "Independent",
//         "seat": "0"
//         }
//    ]
//  }

router.get("/results", (req, res) => {
  // console.log("User Election Commission")

  // TODO
  // 1. get data from the database

  // 2. joint tables

  // 3. send the result back in JSON format for front for public
  // example
  const results = {
    "status": "Completed",
    "winner": "Red Party",
    "seats": [
        {
        "party": "Red Party",
        "seat": "3"
        },
        {
        "party": "Blue Party",
        "seat": "1"
        },
        {
        "party": "Yellow Party",
        "seat": "1"
        },
        {
        "party": "Independent",
        "seat": "0"
        }
   ]
 }
  
  res.json(results)
})

router.get("/constituency/northern-kunlun-mountain", (req, res) => {
    // console.log("constituency/northern-kunlun-mountain")
  
    // TODO
    // 1. get result from the database
  
    // 2. send the result back in JSON format for front for public
    // example

    const results = {"constituency":"northern-kunlun-mountain",
        "result": [
            {
            "name":"candidate 1",
            "party":"Red Party",
            "vote":"4"
            },
            { "name":"candidate 2",
            "party":"Blue Party",
            "vote":"2"
            },    ,
            { "name":"candidate 3",
            "party":"Yellow Party",
            "vote":"1"
            }]
        }    
     res.json(results)
  })

  router.get("/constituency/shangrila-town", (req, res) => {
    // console.log("constituency/northern-kunlun-mountain")
  
    // TODO
    // 1. get result from the database
  
    // 2. send the result back in JSON format for front for public
    // example

    const results = {"constituency":"shangrila-town",
        "result": [
            {
            "name":"candidate 1",
            "party":"Red Party",
            "vote":"5"
            },
            { "name":"candidate 2",
            "party":"Blue Party",
            "vote":"4"
            },    ,
            { "name":"candidate 3",
            "party":"Yellow Party",
            "vote":"1"
            }]
        }    
     res.json(results)
  })

  // Do the rest of the constituencies

module.exports = router
