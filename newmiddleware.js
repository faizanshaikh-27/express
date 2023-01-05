// app.use() - Its a middleware. Express middleware is a function that has access of request response object and can change. // app.use(express.static(path.join(__dirname, “public”))
// app.get() - app.get(“route”, callback)



const express = require("express")
const app = express()
const port = 7000

//middleware
const middleware = (req, res, next) => {
    console.log("middleware Function")
    next()
}

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/about", middleware, (req, res) => {
    console.log("this will show after middleware function")
    res.send("About Page")
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})