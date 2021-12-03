// Odd/Even number of divisors
// Given an integer n return "odd" if the number of its divisors is odd. Otherwise return "even".

const oddity = n => Math.sqrt(n) % 1 ? "even" : "odd";
