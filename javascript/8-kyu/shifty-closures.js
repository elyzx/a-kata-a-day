// Shifty Closures
// Functional closures can get overly attached. Set them straight!
// Why doesn't greet_abe() actually greet Abe?

// Before
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};


// After
const greet = name => () =>`Hello, ${name}!`;

const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);
