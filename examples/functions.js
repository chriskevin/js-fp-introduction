////
// First Class Functions
////

// First class functions are assignable
const myFunc = (x) => x;

// and can be passed as arguments

[1, 2, 3].map(myFunc);


////
// Higher Order Functions
////

// A higher order function is a function that takes a function as an argument

const getUserDetails = (isAuthenticated, user) => {
  return isAuthenticated() ? getFullDetails(user) : getBasicDetails(user);
};


////
// Unary Function
////
const inc = (x) => x + 1;


////
// Non Unary Function
////
const add = (x, y) => x + y;


////
// Variadic Function
////
const print = (label, ...args) => {
  console.log(label, ...args);
}
