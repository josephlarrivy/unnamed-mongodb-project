const express = require('express');
const User = require('./models/user')

const { connectToDb } = require('./db')

const app = express()
app.use(express.json())

let user;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })
    user = new User();
  }
})

app.get('/testconnection', (req, res) => {
  // res.json({ message: 'connection working' })
  response = user.testClass()
  res.json({response})
})

/////////////////// routes //////////////////


app.post('/user', (req, res) => {

  // console.log(req.body)

  user.createUser(req.body)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
})