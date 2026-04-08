# Problem: Promise.all

Use `Promise.all()` to wait for multiple Promises and collect their results.

## Your Task

- Create three Promises:
- `p1` resolves `"A"` after 1 second.
- `p2` resolves `"B"` after 2 seconds.
- `p3` resolves `"C"` after 3 seconds.
- Use `Promise.all([p1, p2, p3])` and log the final array.

## Expected Output

- `["A", "B", "C"]` (after the slowest promise finishes)
