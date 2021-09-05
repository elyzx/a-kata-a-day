// Sum without highest and lowest number
// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

const sumArray = (array) => {
  if (array == null || array.length < 2) {
    return 0;
  }
  let total = 0;
  let sortedArr = array.sort(function(a,b) {return a-b});
  for (let i = 1; i < sortedArr.length - 1; i++) {
    total += sortedArr[i];
  }
  return total;
}
