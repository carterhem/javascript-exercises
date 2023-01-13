const removeFromArray = function(inputArray, ...args) {
  //added inputs inputArray and args - used spread on args for more than one input value
  return inputArray.filter(j => !args.includes(j));
  //return the result from: filter inputArray, item can be added to return as long as it isn't included in args
  //wasn't sure about strictly equals being auto included (same type from last test) but changed up the test and filter will only identify the value if they are they same type
};

// Do not edit below this line
module.exports = removeFromArray;
