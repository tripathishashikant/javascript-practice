function sum(arr) {
  if (len === 0 || !Array.isArray(arr))
      return 'Empty Array or not an Array'

  let sum = 0
  let len = arr.length

  for (let i = 0; i < len; i += 1) {
    const num = Number(arr[i])

    if ( arr[i] !== arr[i] ) {
      continue
    }

    sum += arr[i]
  }

  return sum
}

console.log(sum([1, 4, 'ab', [], {}, 5]));