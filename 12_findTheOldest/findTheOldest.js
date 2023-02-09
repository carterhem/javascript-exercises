const findTheOldest = function(array) {
  // array.forEach(element => console.log("element.yearOfBirth", element.yearOfBirth));
  array.forEach(element => {
    //looping through each element
    if(element.yearOfDeath) {
      //if year of death exists, use it
      let age = element.yearOfDeath - element.yearOfBirth;
      //define age
      element.age = age;
      //add age to element
    } else if (!element.yearOfDeath) {
      //if yearOfDeath doesn't exists
      let age = new Date().getFullYear() - element.yearOfBirth
      //use current date to find age
      element.age = age;
      //add age to element
    }
  })
  const newArray = array.sort((a,b) => a.age > b.age ? -1 : 1)
  //create newArray from original array sorting based on age (oldest first)
  return newArray[0];
  //return first index of newArray
}; 

// Do not edit below this line
module.exports = findTheOldest;
