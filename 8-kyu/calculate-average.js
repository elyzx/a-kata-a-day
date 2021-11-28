// Calculate average

// Write a function which calculates the average of the numbers in a given list.

const find_average = (array) => {
  const sum = array.reduce((a, b) => a + b, 0);
  return (sum / array.length) || 0;
}
