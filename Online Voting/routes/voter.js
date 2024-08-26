const express = require("express")
const router = express.Router()

router.post("/register", (req, res) => {
  // 1. check the UVC code
  const isValid = true
  if (isValid) {
    res.send ("Successful register")
  } else {
    res.send ("Invalid UVC code")
  }
})

router.get("/vote", (req, res) => {
    // 1. get the voter constituency
    // 2. get candidates in that constituency
    
    const data = {
        "constituency": "northern-kunlun-mountain",
        "candidates": [
            { "name": "Muhammad Adam", "party": "Red Party" },
            { "name": "Muhammad Amir", "party": "Blue Party" },
            { "name": "Muhammad Arif", "party": "Yellow Party" }
        ]
    };

    res.json(data)
  })

  router.get("/uvc", (req, res) => {
    // 1. get the uvc number from database
    // Example
    const data = {
        "uvc": [
          "HH64FWPE",
          "BBMNS9ZJ",
          "KYMK9PUH",
          "WL3K3YPT",
          "JA9WCMAS",
          "Z93G7PN9",
          "WPC5GEHA",
          "RXLNLTA6", 
          "7XUFD78Y",
          "DBP4GQBQ"
        ]
    };

    res.json(data)
  })


router.post("/vote", (req, res) => {
    // 1. check the resigister voter 
    // 2 check for vating status, if already vote then send error message
    const isValid = false
    const votingStatus = true

    if (isValid && !votingStatus) {
        res.send ("Successful voting")
    } else if (votingStatus) {
        res.send ("Already voted")
    } 
    else {
        res.send ("Invalid user")
    }
  })

module.exports = router
