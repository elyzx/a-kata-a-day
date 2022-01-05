//  Find the median
// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers.

const median = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
  
    return sorted[middle];
}
