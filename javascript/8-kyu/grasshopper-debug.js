// Grasshopper - Debug
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.

// Before
function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (tempertur) - 32 + (5/9)
  return temperature
}

// Solution
const weatherInfo = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5 / 9);
  if (celsius >= 0) {
    return `${celsius} is above freezing temperature`;
  };
  return `${celsius} is freezing temperature`;
};
