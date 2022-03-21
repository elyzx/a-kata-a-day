// Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.

const findAverage = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}
