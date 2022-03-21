// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

const past = (h, m, s) => {
  let hour = h * 3600000;
  let mins = m * 60000;
  let secs = s * 1000;
  return hour + mins + secs;
}
