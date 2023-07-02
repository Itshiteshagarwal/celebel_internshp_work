//there are five types of loops in javascript
//1.for loop
//2. while loop
//3. do while loop
//4. for in loop
//5. for of loop

//1. for loop
//structure
for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
  }

//example:
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  
//2. while loop
//structure
while (condition) {
    // Code to be executed in each iteration
  }

//example
let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}


//3. do while loop
//structure
do {
    // Code to be executed in each iteration
  } while (condition);

//example
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


//4. for in loop
//structure
for (variable in object) {
    // Code to be executed in each iteration
  }

//example
const person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }



//5. for of loop
//structure
for (variable of iterable) {
    // Code to be executed in each iteration
  }

//example
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

