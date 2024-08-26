const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// election commission APIs
const electionCommRouter = require("./routes/election_comm")
// Pulic/media election results APIs
const resultRouter = require("./routes/results")
// Voter APis (registration & votes)
const voterRouter = require("./routes/voter")

// Allow CORS - This need to be removed for production
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allows access from any origin
    next();
});

app.use("/gevs/electionComm", electionCommRouter)
app.use("/gevs/voter", voterRouter)
app.use("/gevs", resultRouter)

app.listen(3000)
