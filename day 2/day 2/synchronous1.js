// here we perform the same crud operation for json file using synchronous way
const fs = require('fs');

// 1. Create (Append) - Create and append data to a JSON file
function createData(filename, data) {
  fs.appendFile(filename + '.json', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Error creating data:', err);
    } else {
      console.log('Data appended to', filename + '.json');
    }
  });
}

// 2. Read - Read data from a JSON file
function readData(filename) {
  fs.readFile(filename + '.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading data:', err);
    } else {
      const jsonData = data.trim().split('\n').map(JSON.parse);
      console.log('Data from', filename + '.json:', jsonData);
    }
  });
}

// 3. Update - Update data in a JSON file
function updateData(filename, updatedData) {
  fs.writeFile(filename + '.json', JSON.stringify(updatedData) + '\n', (err) => {
    if (err) {
      console.error('Error updating data:', err);
    } else {
      console.log('Data updated in', filename + '.json');
    }
  });
}

// 4. Delete - Delete a JSON file
function deleteFile(filename) {
  fs.unlink(filename + '.json', (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log(filename + '.json deleted');
    }
  });
}

// Example usage:
const filename = 'data'; 
const dataToCreate = { name: 'John Doe', age: 30 };
createData(filename, dataToCreate);

const updatedData = { name: 'hitesh agarwal', age: 20 };
updateData(filename, updatedData);

readData(filename);


deleteFile(filename);
