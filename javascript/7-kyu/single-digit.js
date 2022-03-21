// Single digit
// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.
// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹

const singleDigit = (n) => {
  if (n < 10) return n;
  
  return singleDigit(
      n.toString(2).split('').map(Number).reduce((sum, num) => sum += num)
  );
}

// split out
const singleDigit = (n) => (n < 10 ? n : singleDigit(getSumOfBits(n)));

const getSumOfBits = (n) => n.toString(2).split('').reduce((sum, num) => sum + (num === '1' ? 1 : 0), 0);
