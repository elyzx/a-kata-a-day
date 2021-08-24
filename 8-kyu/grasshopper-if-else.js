// Grasshopper - if/else review
// In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function
// The preloaded function available are forward() and backward().

function main (input) {
  if (input === 'forward') {
    return forward();
  }
  if (input === 'backward') {
    return backward();
  }
  return 'Not a valid input.';
};
