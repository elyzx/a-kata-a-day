// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
  if (iterable.length === 0) {
    return [];
  };
  
  let prevElem = iterable[0];
  let result = [prevElem];
  
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != prevElem) {
      result.push(iterable[i]);
      prevElem = iterable[i];
    }
  }
  return result;
}
