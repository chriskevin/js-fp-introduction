////
// Semi Group
////

// Array is a semi group

[1, 2, 3].concat([4, 5, 6]);

// Associativity is also required for it to be a true semi group

[1, 2, 3].concat([4, 5, 6]).concat([7, 8, 9]);

// Should yield the same as

[1, 2, 3].concat([4, 5, 6].concat([7, 8, 9]));

// String is a semi group

'Friendly'.concat(' Dragon');

// Associativity is also required for it to be a true semi group

'Friendly'.concat(' Dragon').concat(' Baby');

// Should yield the same as

'Friendly'.concat(' Dragon'.concat(' Baby'));
