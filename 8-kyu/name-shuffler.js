// Write a function that returns a string in which firstname is swapped with last name.

// Long form
function nameShuffler(str){
  // split the full name
  let fullName = str.split(' ');
  // grab the first name
  let firstName = fullName[0];
  // grab the last name
  let lastName = fullName[fullName.length - 1];
  // return and join the name strings
  return lastName.concat(' ', firstName)
}

// Short form
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}
