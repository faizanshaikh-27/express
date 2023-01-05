const express = require("express")
const router = express.Router()

// Creates a new router object.
// const router = express.Router([options])

router.get("/", (req, res) => {
    res.send(userData = [{
        "id": 1,
        "first_name": "Faizan",
        "last_name": "Shaikh",
        "email": "faizan@wolig.com",
        "gender": "Male",
        "ip_address": "26.58.193.2"
      }, {
        "id": 2,
        "first_name": "Sameer",
        "last_name": "Chaudhry",
        "email": "sameer@wohlig.com",
        "gender": "Male",
        "ip_address": "229.179.4.212"
      }, {
        "id": 3,
        "first_name": "Ahmed",
        "last_name": "Surya",
        "email": "ahmed@wohlig.com",
        "gender": "Male",
        "ip_address": "180.66.162.255"
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
