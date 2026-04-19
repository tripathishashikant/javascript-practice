# The Problem: "The Persistent Loader" (Retry with Limit)

In the real world, APIs don't just "timeout"—sometimes they fail because of a shaky internet connection. We don't want to show an error immediately; we want to retry a few times before giving up.

## Your Task

Write a function fetchWithRetry(taskFn, retries, delayMs).

- taskFn: A function that returns a Promise (the API call).

- retries: The maximum number of times to try again if it fails.

- delayMs: How long to wait between each retry.

## Rules

If the promise resolves, return the data immediately.

If it fails, wait delayMs and try again.

If it fails more than the retries limit, reject with the final error.
