// FIXME: Replace all dots
// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Fix the bug so we can all go home early.

// Before
var replaceDots = function(str) {
  return str.replace(/./, '-');
}

// After
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
