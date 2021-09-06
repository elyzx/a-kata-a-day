// Remove First and Last Character Part Two
//  You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

const array = (arr) => {
  let res = arr.split(",").slice(1, -1).join(' ');
  if (arr.length <= 2 || res.length < 1) {
    return null;
  }
  return res;
}
