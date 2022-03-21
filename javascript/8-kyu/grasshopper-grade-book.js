// Grasshopper - Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

const getGrade = (s1, s2, s3) => {
  let average = (s1 + s2 + s3) / 3
  if (average >= 90) {
    return 'A';
  }
  if (average >= 80) {
    return 'B';
  }
  if (average >= 70) {
    return 'C';
  }
  if (average >= 60) {
    return 'D';
  }
  return 'F';
}
