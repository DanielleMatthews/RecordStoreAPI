// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const db = mongoose.connection

// Environment Variables
const app = express()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public')) 

app.use(cors())

//Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true}, () => console.log('mango connection'))

//erros
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Routes
const recordController = require('./controllers/records.js')
app.use('/records', recordController)



app.listen(PORT, () => {
  console.log('yippe deee', PORT)
})