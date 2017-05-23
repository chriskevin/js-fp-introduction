////
// Hindley Milner Type Signatures
////

// Non curried

// add :: (Number, Number) -> Number
const add = (x, y) => x + y;

// Curried

// add :: Number -> Number -> Number
const add = (x) => (y) => x + y;
