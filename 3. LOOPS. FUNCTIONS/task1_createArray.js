/*
Write a function createArray(start, end) that takes two parameters as input: 
the starting value
the ending value.
The function should return an array with a range of these values (implement it with numeric values only).
*/

function createArray(start, end) {
  let range = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

console.log(createArray(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const createArray2 = (start, end) =>
  new Array(end).fill(start).map((i, idx) => i + idx);

console.log(createArray2(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const createArray3 = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

console.log(createArray(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
