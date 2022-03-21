// Flatten
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

const flatten = (array) => {
  return array.reduce((a, b) => a.concat(b), []);
}
