const fibonacci = function(input) {
  //check if input is string and convert to number
  if (input.typeof === 'string') {
    Number(input);
  };
  //if number is negative, return "OOPS"
  if (input < 0) {
    return "OOPS"
  };

  let array = [];
  //create array
  for(let x = 0; x <= input; x++) {
    //create loop starting at zero
    if(x == 0) {
      //first loop? push 1
      array.push(1);
    } else if (x == 1) {
      //second loop? push 1
      array.push(1);
    } else if (x >= 2) {
      //if third loop (zero index) or above push sum of previous two numbers
      sum = array[x-2] + array[x-1];
      array.push(sum);
    }
  }
  return array[input-1];
  //return at input -1 as arrays are zero indexed
};


// Do not edit below this line
module.exports = fibonacci;
