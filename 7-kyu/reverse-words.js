// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  let revLetters = str.split('').reverse().join('')
  let revWords = revLetters.split(' ').reverse().join(' ')
  return revWords
}
