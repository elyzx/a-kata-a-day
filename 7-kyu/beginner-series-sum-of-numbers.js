// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

const getSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
