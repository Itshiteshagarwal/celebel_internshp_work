// JavaScript Variables can be declared in 4 ways:

// 1. Automatically
// 2. var - The var keyword should only be used in code written for older browsers(1995-2015)
// 3. let - Only use let if you can't use const
// 4. const - Always use const if the value and its type (array and object) should not be changed

//example of automatically
// x, y, and z are undeclared variables.

// They are automatically declared when first used
x = 5;
y = 6;
z = x + y;
console.log(z);

//example of var
var x = 5;
var y = 6;
var z = x + y;
console.log(x,y,z);

//example of let
let x = 5;
let y = 6;
let z = x + y;
console.log(x,y,z);

//example of const
const x = 5;
const y = 6;
const z = x + y;
console.log(z);

//one mixed example
const price_1 = 5;
const price_2 = 6;
let total = price_1 + price_2;
console.log(total);


//rules for declartaion of variable
//letter, digit, underscore,dollarsign(a,b,c / 1,2,3/ _ / $)

