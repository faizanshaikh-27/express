const express = require("express")
const app = express();
const port = 3000;

// middleware
const middleware = (req, res, next) => {
    console.log("This is a middleware")
    next()
}

app.get("/about", middleware,  (req, res) => {
    console.log("This is about middleware")
    res.send("This is about page from a middleware")
})




// home page
app.get("/", (req, res) => {
    res.send("Hello World")
})



//displaying date using response
app.get("/date", (req, res) => {
    res.send(`The date is ${new Date().toString()}`)
})




// parsing json string 
app.get("/json", (req, res) => {
    res.json([{
        id: 27,
        name: "Faizan",
        age: 22,
        city: "Mumbai",
        topic: "ExpressJS"
    }])
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

/* 
In Express.js, a request object (req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

A response object (res) represents the HTTP response that an Express.js app sends when it receives an HTTP request. The response object has methods for setting the HTTP status, cookies, and headers, and for sending the response body.
*/