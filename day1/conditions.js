//there are four tye of conditional statement in javascript
//1. if
//2. elseif
//3. else
//4. switch case


//for example 
//if:
if (condition) {
    // Code to be executed if the condition is true
  }

//if else
if (condition) {
    // Code to be executed if the condition is true
  } else {
    // Code to be executed if the condition is false
  }

//elseif
  if (condition) {
    // Code to be executed if the condition is true
  } else {
    // Code to be executed if the condition is false
  }

//switch case
switch (expression) {
    case value1:
      // Code to be executed if expression matches value1
      break;
    case value2:
      // Code to be executed if expression matches value2
      break;
    default:
      // Code to be executed if expression doesn't match any case
  }
  

  //examples
  //for if else and else if
  const age = 25;

if (age >= 18) {
  console.log('You are an adult.');
} else if (age >= 13) {
  console.log('You are a teenager.');
} else {
  console.log('You are a child.');
}


//for switch-case and default
const dayOfWeek = 3; // Assuming 0 for Sunday, 1 for Monday, ..., 6 for Saturday

switch (dayOfWeek) {
  case 0:
    console.log('Today is Sunday.');
    break;
  case 1:
    console.log('Today is Monday.');
    break;
  case 2:
    console.log('Today is Tuesday.');
    break;
  case 3:
    console.log('Today is Wednesday.');
    break;
  case 4:
    console.log('Today is Thursday.');
    break;
  case 5:
    console.log('Today is Friday.');
    break;
  case 6:
    console.log('Today is Saturday.');
    break;
  default:
    console.log('Invalid day of the week.');
    break;
}

