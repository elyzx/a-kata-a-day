// Grasshopper - Combine strings
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

const combineNames = (first, second) => {
  return first.concat(` ${second}`);
}

const combineNames = (...names) => {
  return names.join(' ');
}
