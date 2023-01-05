const express = require("express")
const app = express()
const router = express.Router()
const port = 6000

router.get("/", (req, res) => {
    res.send("Home Page")
})

router.get("/router", (req, res) => {
    res.send("Router Page")
})

app.listen(port, ()=> {
    console.log(`listening to port ${port}`)
})
module.exports = router;







// A router object is an instance of middleware and routes.
// Invoked for any request passed to this router

router.use((req, res, next) => {
    res.send("This is a router response")
    // same logic here like any other middleware
    next()
})


// will handle any request that will end with /router
router.get("/router", (req, res, next) => {
    res.send("response from router.get")
})
