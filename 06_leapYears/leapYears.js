const leapYears = function(year) {
  if(year % 4 == 0 && year % 100 != 0 || year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    //if year divided by 4 AND year is not divisible by 100 then TRUE
    //if year divided by 4 AND year is divisible by 100 AND year is also divisible by 400 then TRUE
    return true;
  } else {
    return false;
    //if the above conditions are not met, return false
  }

};

// Do not edit below this line
module.exports = leapYears;
