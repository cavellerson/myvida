const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const db = mongoose.connection
require('dotenv').config()

const PORT = process.env.PORT || 3003

const MONGODB_URI = process.env.MONGODB_URI

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))



const controller = require('./controllers/router.js')
app.use('/ml', controller);

app.get('/', (req, res) => {
    res.render('./LogoPage.ejs');
})

mongoose.connect(
    MONGODB_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})
