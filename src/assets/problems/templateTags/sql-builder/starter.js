function sql(strings, ...values) {
  // Your code here
}

const userId = 42;
const status = 'active';

// The mock query
const result = sql`UPDATE users SET status = ${status} WHERE id = ${userId}`;

console.log(result);
