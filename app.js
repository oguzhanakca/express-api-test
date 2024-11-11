const express = require('express')
require('dotenv').config()

const routers = require("./routers/index")

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", routers);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})