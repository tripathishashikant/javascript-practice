/**
 * Starter: Coin Toss
 * TODO: Resolve/reject randomly using Math.random().
 */

const coinToss = new Promise((resolve, reject) => {
  // TODO:
  // - generate Math.random()
  // - resolve if > 0.5, reject otherwise
});

coinToss
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
