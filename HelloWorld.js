const express = require("express")
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("Hello World")

})

app.get("/about", (req, res) => {
    res.send("About Page")

})

app.get("/contact", (req, res) => {
    res.send("Contact Page")

})

app.get("/docs", (req, res) => {
    res.send("Docs Page")

})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})