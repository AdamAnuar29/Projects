const express = require("express")
const app = express()
var db = require("./lib_database")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// login  APIs
const loginRouter = require("./routes/login")
// student  APIs
const studentRouter = require("./routes/student")
// account APIs
const accountRouter = require("./routes/account")
// library APIs
const libraryRouter = require("./routes/library")
// book APIs
const bookRouter = require("./routes/book")
// journal APIs
const journalRouter = require("./routes/journal")
// newspaper APIs
const newspaperRouter = require("./routes/newspaper")
// magazine APIs
const magazineRouter = require("./routes/magazine")
// magazine APIs
const workstationRouter = require("./routes/workstation")
// magazine APIs
const cafeRouter = require("./routes/cafe")
// magazine APIs
const confRoomRouter = require("./routes/confRoom")
// magazine APIs
const discussionAreaRouter = require("./routes/discussionArea")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    next();
  });

app.use("/lib/login", loginRouter)
app.use("/lib/student", studentRouter)
app.use("/lib/account", accountRouter)
app.use("/lib/library", libraryRouter)
app.use("/lib/book", bookRouter)
app.use("/lib/journal", journalRouter)
app.use("/lib/newspaper", newspaperRouter)
app.use("/lib/magazine", magazineRouter)
app.use("/lib/cafe", cafeRouter)
app.use("/lib/workstation", workstationRouter)
app.use("/lib/confRoom", confRoomRouter)
app.use("/lib/discussionArea", discussionAreaRouter)

app.listen(3000)
