const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// In-memory data store (Replace this with a database in a real application)
let users = [];

// Create a new user
app.post('/users', (req, res) => {
  const { name, email, enrolment, mobile, address, standard } = req.body;
  if (!name || !email || !enrolment || !mobile || !address || !standard) {
    return res.status(400).json({ error: 'All details are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    enrolment,
    mobile,
    address,
    standard
  };

  users.push(newUser);
  return res.status(201).json(newUser);
});

// Read all users
app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

// Read a specific user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.status(200).json(user);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email, enrolment, mobile, address, standard} = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  if (enrolment) user.enrolment = enrolment;
  if (mobile) user.mobile = mobile;
  if (address) user.address = address;
  if (standard) user.standard = standard;

  return res.status(200).json(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  return res.status(200).json({ message: 'User deleted successfully' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
