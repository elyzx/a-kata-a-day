// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sortedArr = args.sort(function (a, b) {return a - b})
    return sortedArr[0]
  }
}
