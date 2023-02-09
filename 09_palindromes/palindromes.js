const palindromes = function (input) {

//clean input by replacing /start[character set - dont forget \ to escape regex meaning]/global flag and replace it with second parameter "" as in nothing
input = input.replace(/[.,\/#!$%\^&\*;:@{}=\-_`~()]/g, "")
  // start string with / match any number of whitespace characters \s+ globally \g and replace it with second parameter "" as in nothing
  .replace(/\s+/g, "");

let cleanString = input.toLowerCase();
// create string/ lowercase it, remove all spaces and punctiation

let reverseString = cleanString.split("").reverse().join("");
// create a reverse copy of the string

return cleanString === reverseString ? true : false;
//compare cleaned string to cleaned reverse string
//if cleaned string and cleaned reverse string are the same, then return true
};


// Do not edit below this line
module.exports = palindromes;
