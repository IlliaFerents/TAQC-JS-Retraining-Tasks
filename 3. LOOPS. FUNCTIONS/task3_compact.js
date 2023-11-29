/*
Write a function named compact(arr) that takes an array as input and returns a new array with unique values.
*/

const compact = (arr) => {
  let uniq = [];

  for (let i of arr) {
    if (!uniq.includes(i)) uniq.push(i);
  }
  return uniq;
};

console.log(compact([1, 2, 3, 4, 5, 5, 5])); // [ 1, 2, 3, 4, 5 ]

const compact2 = (arr) =>
  arr.reduce((uniq, v) => (uniq.includes(v) ? uniq : [...uniq, v]), []);

console.log(compact2([1, 2, 3, 4, 5, 5, 5])); // [ 1, 2, 3, 4, 5 ]

const compact3 = (arr) => [...new Set(arr)];

console.log(compact3([1, 2, 3, 4, 5, 5, 5])); // [ 1, 2, 3, 4, 5 ]
