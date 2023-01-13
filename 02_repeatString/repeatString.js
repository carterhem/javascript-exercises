const repeatString = function(string, numOfTimes) {
  let endString = '';
  if(numOfTimes < 0) {
    endString = 'ERROR'
  } else {
    for(let i = 1; i <= numOfTimes; i++) {
      endString += string;
    }
  }
  
  return endString
};

// Do not edit below this line
module.exports = repeatString;
