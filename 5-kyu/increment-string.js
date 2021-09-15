// String incrementer
// Your job is to write a function which increments a string, to create a new string.
// - If the string already ends with a number, the number should be incremented by 1.
// - If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (input) {
  let inputStr = input.replace(/[0-9]/g, '');
  let len = input.length - inputStr.length;
  let strSlice = input.slice(inputStr.length) || '0';
  strSlice = (parseInt(strSlice) + 1).toString();
  
  while (strSlice.length < len) {
    strSlice = "0" + strSlice;
  }
  return inputStr.concat(strSlice);
}
