const express = require('express');
const { ObjectId } = require('mongodb');
const User = require('./models/user')

const { connectToDb, getDb } = require('./db')

const app = express()
app.use(express.json())

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})




////////////////// routes //////////////////


app.get('/testconnection', (req, res) => {
  res.json({ message: 'connection working' })
})

