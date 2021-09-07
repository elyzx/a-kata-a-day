// Semi-Optional
// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.
// Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

// Before
function wrap(value) {
  return
  {
    value:value 
  };
}

// After
function wrap(value) {
  return {
    value:value 
  };
}
