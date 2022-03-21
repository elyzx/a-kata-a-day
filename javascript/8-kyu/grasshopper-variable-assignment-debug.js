// Grasshopper - Variable Assignment Debug
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

// Before
var a == "dev"
var b == "Lab"

var name == a + b


// After
let a = "dev"
let b = "Lab"
let name = a + b
