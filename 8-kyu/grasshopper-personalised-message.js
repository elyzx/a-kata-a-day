// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message.

const greet = (name, owner) => {
  if (name === owner) {
    return `Hello boss`;
  }
  return `Hello guest`;
}

// or
const greet = (name, owner) => name == owner ? `Hello boss`: `Hello guest`;
