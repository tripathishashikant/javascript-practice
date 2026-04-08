# Problem: SQL Query Builder (SQL Injection Prevention)

Create a tagged template function named `sql` that helps safely build database queries.

It should take a template literal containing a SQL query and dynamic values,
and return an object with two properties:

- `query`: The SQL string with all dynamic user values replaced by a `?` parameter marker.

- `values`: An array containing all the dynamic values in their original order.

Example Expected Output:

```json
{
  "query": "UPDATE users SET status = ? WHERE id = ?",
  "values": ["active", 42]
}
```
