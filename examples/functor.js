////
// Functor
////

// Array is a functor

[1, 2, 3].map((x) => x + 1);

// Associativity is also required for it to be a true functor

[1, 2, 3].map(inc).map(multiply(2));

// Should yield the same as

[1, 2, 3].map((x) => multiply(2, inc(x)));
