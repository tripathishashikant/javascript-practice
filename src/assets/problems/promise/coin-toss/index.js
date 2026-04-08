const coinToss = new Promise((resolve, reject) => {
  const tossRes = Math.random();

  if (tossRes > 0.5) {
    resolve('Heads: Jeet gaye!');
  } else {
    reject('Tails: Harr gaye!');
  }
});

coinToss
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
