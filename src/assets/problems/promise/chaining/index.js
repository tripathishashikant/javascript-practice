new Promise((res) => {
  res(5);
})
  .then((val) => {
    return val * 2;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
