const express = require('express')
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000
const Data_Router = require("./modules/Data/Data.routes")
const User_Router = require("./modules/User/User.routes")
app.use(express.json())

app.use(Data_Router , User_Router)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))