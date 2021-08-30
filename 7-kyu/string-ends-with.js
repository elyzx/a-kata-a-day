// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


const solution = (str, ending) => {
  if (ending.length === 0) {
    return true;
  } 
  return str.slice(-ending.length) === ending.slice(-ending.length);
}

// shorter version
const solution = (str, end) => {
  return str.endsWith(end);
}
