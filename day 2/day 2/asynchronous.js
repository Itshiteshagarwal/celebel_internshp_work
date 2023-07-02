const fs = require('fs');
// crud
// create file -> append file, open, writefile

// 1.append

fs.appendFile('file1.txt', 'this is file 1', (err) => {
    if (err) {
        console.error('Error creating file 1:', err);
    } else {
        console.log('file1 created!');
    }
});
// 2.write file
// completley update the data
fs.writeFile('file2.txt', 'this is file 2', (err) => {
    if (err) {
        console.error('Error creating file 2:', err);
    } else {
        console.log('file2 is created');
    }
});


// 3. open file
fs.open('file3.txt', 'w', (err) => {
    if (err) {
        console.error('Error creating file 3:', err);
    } else {
        console.log('file3 created');
    }
});


// read operations = read file()

fs.readFile('file1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file 1:', err);
    } else {
        console.log(data);
    }
});




// updatefile = appendFile(), writeFile()
fs.appendFile('file1.txt', ' - updated content', (err) => {
    if (err) {
        console.error('Error updating file 1:', err);
    } else {
        console.log('file1 updated!');
    }
});


fs.writeFile('file2.txt', ' - updated content', (err) => {
    if (err) {
        console.error('Error updating file 2:', err);
    } else {
        console.log('file2 updated!');
    }
});



// delete = unlink
fs.unlink('file3.txt', (err) => {
    if (err) {
        console.error('Error deleting file 3:', err);
    } else {
        console.log('file3 deleted');
    }
});


// rename

fs.rename('file2.txt', 'renamed_file2.txt', (err) => {
    if (err) {
        console.error('Error renaming file2:', err);
    } else {
        console.log('file2 renamed');
    }
});