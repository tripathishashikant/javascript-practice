/*
 * Problem: SQL Query Builder (SQL Injection Prevention)
 * 
 * Create a tagged template function named `sql` that helps safely build database queries.
 * It should take a template literal containing a SQL query and dynamic values,
 * and return an object with two properties:
 * 1. `query`: The SQL string with all dynamic user values replaced by a `?` parameter marker.
 * 2. `values`: An array containing all the dynamic values in their original order.
 * 
 * Example Expected Output:
 * { 
 *   query: "UPDATE users SET status = ? WHERE id = ?", 
 *   values: ['active', 42] 
 * }
 */

function sql(strings, ...values) {
    // Your code here
}

const userId = 42;
const status = 'active';

// The mock query
const result = sql`UPDATE users SET status = ${status} WHERE id = ${userId}`;

console.log(result);