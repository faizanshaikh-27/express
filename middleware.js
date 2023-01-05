const express = require("express")
const app = express()
const port = 5000
const users = [{
    id: 0,
    name: "faizan",
    age: 23
}, {
    id: 1,
    name: "ahmed",
    age: 23
}]



const middleware = (req, res, next) => {
    const id = req.params.id


    if (validId(id)) {
        next()
    }
    res.status(400).send({
        error: "Invalid Id"
    })
}
function validId(id) {
    let isValid = false
    users.forEach((user) => {
        if(user.id == id) {
            isValid = true
        }
    })
    return isValid
}

app.get("/users/:id", middleware, (req, res) => {
    const user = findUserID(req.params.id)
    res.send(user)
})
function findUserID(id) {
    let foundUser = {}
    users.forEach((user) => {
        if (user.id == id) {
            foundUser = user
        }
        return
    })
    return foundUser
}

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
