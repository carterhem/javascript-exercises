const sumAll = function(firstVal, secondVal) {
  let endSum = 0;
  
  if(firstVal < 0 || secondVal < 0 || typeof firstVal !== "number" || typeof secondVal !== "number") {
    //handing negative numbers, non number parameter edge cases
    return "ERROR";
  } else if (firstVal < secondVal) {
    //if secondVal is bigger than firstVal - count up
    for(let x = firstVal; x <= secondVal; x++) {
      //keep counting up staring at firstval until you hit second val (include secondVal)
      endSum += x;
      //add it to sum
    }
    return endSum;
  } else if (firstVal > secondVal) {
    //if firstVal is bigger than secondVal - count down
    for(let x = firstVal; x >= secondVal; x--) {
      //keep counting down staring at firstval until you hit second val (include secondVal)
      endSum += x;
      //add it to sum
    }
    return endSum;
    //as always you need to return sum to have access to it
  }
  
};

// Do not edit below this line
module.exports = sumAll;
