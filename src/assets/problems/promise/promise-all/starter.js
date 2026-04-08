/**
 * Starter: Promise.all
 * TODO: Create p1/p2/p3 with different delays and log ["A","B","C"].
 */

const p1 = new Promise((res) => {
  // TODO: resolve "A" after 1000ms
});

const p2 = new Promise((res) => {
  // TODO: resolve "B" after 2000ms
});

const p3 = new Promise((res) => {
  // TODO: resolve "C" after 3000ms
});

Promise.all([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
