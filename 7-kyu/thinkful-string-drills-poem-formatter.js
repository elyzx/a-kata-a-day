// Thinkful - String Drills: Poem formatter
// You have a collection of lovely poems. Unfortuantely they aren't formatted very well. 
// Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

function formatPoem(poem) {
  return poem.split('. ').join('.\n')
}
