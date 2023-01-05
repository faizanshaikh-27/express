const express = require("express")
const app = express()
const port = 8000

app.get("/user/:id", (req, res) => {
    res.send(`Welcome ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})