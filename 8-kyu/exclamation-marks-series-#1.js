// Exclamation marks series #1: Remove a exclamation mark from the end of string
// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

const remove = (s) => {
  if (s.endsWith('!')) {
    return s.substring(0, s.length - 1);
  }
  return s;
}
