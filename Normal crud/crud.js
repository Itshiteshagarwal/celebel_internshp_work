const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // You can choose any available port you like

// Middleware
app.use(bodyParser.json());

// Placeholder data for demonstration purposes 
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items2', (req, res) => {
  res.json(items);
});

// PUT method to update an item by ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
  
    // Find the index of the item with the given ID
    const index = items.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      // Update the item with the new data
      items[index] = { ...items[index], ...updatedItem };
  
      res.json(items[index]); // Respond with the updated item
    } else {
      // If the item with the given ID is not found, return a 404 response
      res.status(404).json({ message: 'Item not found' });
    }
  });

// DELETE method to delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the index of the item with the given ID
  const index = items.findIndex((item) => item.id === id);

  if (index !== -1) {
    // Remove the item from the items array
    const deletedItem = items.splice(index, 1)[0];

    res.json(deletedItem); // Respond with the deleted item
  } else {
    // If the item with the given ID is not found, return a 404 response
    res.status(404).json({ message: 'Item not found' }); 
  }
}); 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  