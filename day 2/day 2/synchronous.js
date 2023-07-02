// create in javascript -> for synchronous
// append file
const fs = require('fs');

try {
  fs.appendFileSync('synchronous1.txt', 'this is file 1 created by hitesh');
  console.log('File created and appended!');
} catch (err) {
  throw err;
}

//write file


try {
  fs.writeFileSync('synchronous2.txt', 'this is file 2 created by hitesh');
  console.log('File 2 is created.');
} catch (err) {
  throw err;
}

//open file


try {
  fs.openSync('file3.txt', 'w');
  console.log('File3 created.');
} catch (err) {
  throw err;
}



//read file operation


try {
  const data = fs.readFileSync('synchronous1.txt', 'utf-8');
  console.log(data);
} catch (err) {
  throw err;
}


//update file operation having two methods (append and write)


try {
  fs.appendFileSync('synchronous1.txt', 'this is file 1');
  console.log('File created and appended!');

  fs.writeFileSync('synchronous2.txt', 'hites ne veere write kr diya h is file me');
  console.log('File 2 is created.');
} catch (err) {
  throw err;
}


//delete file operation



try {
  fs.unlinkSync('file3.txt');
  console.log('File 3 deleted.');
} catch (err) {
  throw err;
}



// rename file operation


try {
  fs.renameSync('renamed_file2.txt', 'file2.txt');
  console.log('File name changed.');
} catch (err) {
  throw err;
}






