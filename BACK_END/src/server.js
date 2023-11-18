const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/ViewEngine')
const webroute = require('./routes/Webroute')


const app = express()
const port = process.env.PORT || 3000

configViewEngine(app);

app.use('/v1', webroute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})