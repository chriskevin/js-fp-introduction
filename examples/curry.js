////
// Curry
////

// Non curried

const add = (x, y) => x + y;

// and is called like so

add(1, 3);

// Basic currying

const add = (x) => (y) => x + y;

// and is called like so

add(1)(3);


// Preferably use a curry helper which is optimized

import {curry} from 'ramda';

const add = curry((x, y) => x + y);

// This can be called both partially and with all arguments
add(1)(3); // This works
add(1, 3); // This works too


////
// Partial Application
////

// Partial application can be used for creating more specific functions

// Without partial application you would need use a wrapping function, creating additiional boilerplate

const inc = (x) => add(x, 1);

// With partial application you provide a subset of arguments and let the new function provide the last ones when called

const inc = add(1);

// Both variants are called like so

inc(3);


////
// Pointful/Pointfree
////

// In a pointful scenario it is necessary to explicitly specify the parameter
[{id: 12}, {id: 24}, {id: 5}].filter((x) => propEq(24, x));

// If propEq is curried we can use partial application, thus making the paramter implicit

[{id: 12}, {id: 24}, {id: 5}].filter(propEq(24));
