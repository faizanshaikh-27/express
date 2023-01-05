const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send(userComment = [{
        "id": 1,
        "fullname": "Faizan",
        "email": "faizan@wolig.com",
        "comment": "Hello World"
      }, {
        "id": 2,
        "fullname": "Sameer",
        "email": "sameer@wohlig.com",
        "comment": "Welcome to expressJS"
      }, {
        "id": 3,
        "fullname": "Ahmed",
        "email": "ahmed@wohlig.com",
        "comment": "This is a comment"
      }])
})

router.post("/", (req, res) => {
    res.send({
        data: "User Information Created"
    })
})

router.put("/", (req, res) => {
    res.send({
        data: "User Information Created"
    })
})

router.patch("/", (req, res) => {
    res.send({
        data: "User Information Created"
    })
})

router.delete("/", (req, res) => {
    res.send({
        data: "User Information Created"
    })
})

module.exports = router;