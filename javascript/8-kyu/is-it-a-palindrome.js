// Is it a palindrome?
// Write function that checks if a given string (case insensitive) is a palindrome.

// long form
function isPalindrome(x) {
  let str = x.toLowerCase()
  let len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

// short form
function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
}
