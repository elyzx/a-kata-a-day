// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Before
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}


// After
const createArray = (number) => {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return newArray;
}
