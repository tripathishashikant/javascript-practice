/**
 * Starter: Timer Delay
 * TODO: Create a Promise that resolves after exactly 3 seconds and logs the success message.
 */

const showErr = false;

const testPromise = new Promise((resolve, reject) => {
  // TODO:
  // - if showErr is true, reject with an error message
  // - otherwise resolve after 3000ms with the completion message
});

testPromise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
