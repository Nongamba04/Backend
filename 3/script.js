//  Creating custom modules through NodeJS

// Importing the module file usin NodeJS
const mod = require("./mod");
console.log(mod);
// returns [Function: average]

// Running the module
// console.log(mod([1,2])); // returns 1.5


// Running a module containing objects
// console.log(mod.avg([2,3]));  //returns 2.5
// console.log(mod.name);  //returns Nongamba
// console.log(mod.branch);  //returns CSE
