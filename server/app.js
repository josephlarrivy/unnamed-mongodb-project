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

app.post('/users', async (req, res) => {
  try {
    const result = await user.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.patch('/users/:id', async (req, res) => {
  const { id } = req.params
  const updates = req.body
  try {
    const result = await user.updateUser(id, updates);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
})

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = await user.deleteUser(id);
    res.status(202).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
})

app.get('/user/:username', async (req, res) => {
  const { username } = req.params
  try {
    const result = await user.getUserByUsername(username);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
})

app.get('/users', async (req, res) => {
  try {
    const result = await user.getUsers();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
})