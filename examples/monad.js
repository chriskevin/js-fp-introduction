////
// Monad
////

// Promise is a monad similar to Either with it's Right and Left types

Promise.resolve({id: 12}) // of
.then((productIdentifier) => getProducts(productIdentifier)) // Right, chain, map
.then( // fold (inverted order)
  (products) => {
    return products;
  },
  (error) => {
    console.log(error);
    return error;
  }
)
.catch((error) => { // Left, chain, fold
  console.log(error);
  return error;
})
