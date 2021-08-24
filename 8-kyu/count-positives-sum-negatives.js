// Count of positives / sum of negatives
// Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

const countPositivesSumNegatives = (input) => {
  if (input == null || input.length == 0) {
    return [];
  }
  else {
    let countPositives = 0;
    let sumNegatives = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++;
      }
      if (input[i] < 0) {
        sumNegatives += input[i];
      }
    }
    return [countPositives, sumNegatives];
  }
}
