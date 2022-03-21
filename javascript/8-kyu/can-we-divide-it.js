// Can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
  if (number % a != 0) {
    return false
  }
  if (number % b != 0) {
    return false
  }
  return true
}

// shorter version
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0
}
