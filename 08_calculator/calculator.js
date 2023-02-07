const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(inputArray) {
  //started at 0 here as the initial amount to add to should be zero
  return inputArray.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(input) {
  //had to start at one here so we don't keep multipling items by zero
  return input.reduce((partialSum, a) => partialSum * a, 1)
};

const power = function(firstnum, secondnum) {
  return (firstnum ** secondnum);
};

const factorial = function(num) {
let result = num;

	if(num === 0 || num === 1) {
    return 1;
  }

  while(num > 1) {
    num --
    result = result * num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
