// Find the Remainder

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

const remainder = (a, b) => {
  if (a > b) {
    return a % b;
  }
  return b % a;
}

// shortened to
const remainder = (a, b) => a > b ? a % b : b % a;
