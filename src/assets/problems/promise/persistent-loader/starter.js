// Starter: Persistent Loader (Retry with Limit)

// A mock API that fails the first 2 times and succeeds on the 3rd
let count = 0;
const unstableAPI = () =>
  new Promise((res, rej) => {
    count++;

    if (count < 3) {
      console.log(`Attempt ${count}: Failed...`);

      rej('Server Error');
    } else {
      res('Success! Data received.');
    }
  });

function fetchWithRetry(taskFn, retries, delayMs) {
  // TODO: implement retry logic with delay and max retries
}

// Expected Usage:
fetchWithRetry(unstableAPI, 3, 1000).then(console.log).catch(console.error);
