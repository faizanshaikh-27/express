const express = require("express")
const app = express()
const port = 4000



// importing from user.js and comment.js
const userRoutes = require("./routes/users")
const commentRoutes = require("./routes/comment")

app.use("/users", userRoutes)
app.use("/comment", commentRoutes)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})