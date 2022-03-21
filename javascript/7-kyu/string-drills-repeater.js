// Thinkful - String Drills: Repeater
// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

function repeater(string, n){
  let result = '';
  for (let i = 0; i < n; i++) {
    result = result.concat(string);
  };
  return result;
};

// shorter form
function repeater(string, n) {
  return string.repeat(n);
};
