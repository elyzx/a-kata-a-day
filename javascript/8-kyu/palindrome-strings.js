// Palindrome Strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome.

const isPalindrome = (line) => {
  return line.toString() === line.toString().split('').reverse().join('');
}

// or
const isPalindrome = (line) => {
  line = line.toString();
  return line === line.split('').reverse().join('');
}
