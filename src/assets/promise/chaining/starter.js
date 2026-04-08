/**
 * Starter: Chaining
 * TODO: Resolve 5, double it in a then, then log 10.
 */

new Promise((res) => {
  res(5);
})
  .then((val) => {
    // TODO: return val * 2
  })
  .then((result) => {
    // TODO: console.log(result)
  })
  .catch((err) => {
    console.error(err);
  });
